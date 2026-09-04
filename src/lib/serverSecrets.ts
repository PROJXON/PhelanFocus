import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';

export type PhelanBackendSecrets = {
  STRIPE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  EMAIL_TO?: string;
};

let cachedSecretsPromise: Promise<PhelanBackendSecrets> | null = null;

function localSecrets(): PhelanBackendSecrets | null {
  const values: PhelanBackendSecrets = {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_TO: process.env.EMAIL_TO,
  };

  if (values.STRIPE_SECRET_KEY || values.RESEND_API_KEY || values.EMAIL_TO) {
    return values;
  }

  return null;
}

async function loadSecretsFromAws(): Promise<PhelanBackendSecrets> {
  const secretId = process.env.PHELAN_SECRET_ID || 'phelan/backend';
  const region = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || 'us-east-2';

  const client = new SecretsManagerClient({ region });
  const response = await client.send(
    new GetSecretValueCommand({
      SecretId: secretId,
    }),
  );

  if (!response.SecretString) {
    throw new Error(`Secrets Manager secret "${secretId}" has no SecretString`);
  }

  try {
    return JSON.parse(response.SecretString) as PhelanBackendSecrets;
  } catch {
    throw new Error(`Secrets Manager secret "${secretId}" is not valid JSON`);
  }
}

export async function getPhelanBackendSecrets(): Promise<PhelanBackendSecrets> {
  const local = localSecrets();
  if (local) return local;

  if (!cachedSecretsPromise) {
    cachedSecretsPromise = loadSecretsFromAws().catch((error) => {
      cachedSecretsPromise = null;
      throw error;
    });
  }

  return cachedSecretsPromise;
}
