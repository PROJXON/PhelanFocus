import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { ReactNode } from 'react';
import { NextRequest } from 'next/server';
import contactParagraphs from '@/functions/contactParagraphs';

export async function POST(req: NextRequest) {
  try {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      throw new Error('RESEND_API_KEY is not set in the environment');
    }

    const resend = new Resend(resendKey);
    const { name, email } = await req.json();
    const paragraphs: ReactNode[] = contactParagraphs();

    const { data, error } = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: ['the.phelan.focusn@gmail.com'],
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
