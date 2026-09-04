import Stripe from 'stripe';
import { getPhelanBackendSecrets } from '@/lib/serverSecrets';

let stripePromise: Promise<Stripe> | null = null;

export default async function getStripe(): Promise<Stripe> {
  if (!stripePromise) {
    stripePromise = (async () => {
      const { STRIPE_SECRET_KEY } = await getPhelanBackendSecrets();

      if (!STRIPE_SECRET_KEY) {
        throw new Error('Stripe secret key is not configured');
      }

      return new Stripe(STRIPE_SECRET_KEY);
    })().catch((error) => {
      stripePromise = null;
      throw error;
    });
  }

  return stripePromise;
}
