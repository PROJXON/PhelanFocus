import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { ReactNode } from 'react';
import { NextRequest } from 'next/server';
import contactParagraphs from '@/functions/contactParagraphs';
import { getPhelanBackendSecrets } from '@/lib/serverSecrets';

export async function POST(req: NextRequest) {
  try {
    const { RESEND_API_KEY, EMAIL_TO } = await getPhelanBackendSecrets();

    if (!RESEND_API_KEY) {
      throw new Error('Resend API key is not configured');
    }

    const resend = new Resend(RESEND_API_KEY);
    const { name, email } = await req.json();
    const paragraphs: ReactNode[] = contactParagraphs();

    const { data, error } = await resend.emails.send({
      from: 'noreply@thephelanfocus.com',
      to: [EMAIL_TO || 'the.phelan.focusn@gmail.com'],
      replyTo: email,
      subject: 'Contact from Website',
      react: EmailTemplate({
        heading: `Hi ${name},`,
        paragraphs,
        lastMarginTop: false,
      }),
    });

    if (error) return Response.json({ error }, { status: 400 });

    return Response.json(data);
  } catch (err) {
    console.error('Resend error:', err);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
