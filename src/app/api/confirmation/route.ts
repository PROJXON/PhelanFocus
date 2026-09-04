import { EmailTemplate } from '@/components/EmailTemplate';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { Email } from '@/types/interfaces';
import { ReactNode } from 'react';
import confirmationParagraphs from '@/functions/confirmationParagraphs';
import { getPhelanBackendSecrets } from '@/lib/serverSecrets';

export async function POST(req: NextRequest) {
  try {
    const { RESEND_API_KEY, EMAIL_TO } = await getPhelanBackendSecrets();

    if (!RESEND_API_KEY) {
      throw new Error('Resend API key is not configured');
    }

    const resend = new Resend(RESEND_API_KEY);
    const { name, email, message }: Email = await req.json();
    const paragraphs: ReactNode[] = confirmationParagraphs({ name, email, message });

    const { data, error } = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: [email, EMAIL_TO || 'the.phelan.focusn@gmail.com'],
      subject: 'Confirmation email',
      react: EmailTemplate({
        heading: 'Hello Phelan,',
        paragraphs,
        lastMarginTop: true,
      }),
    });

    if (error) return Response.json({ error }, { status: 400 });

    return Response.json(data);
  } catch (err) {
    console.error('Resend error:', err);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
