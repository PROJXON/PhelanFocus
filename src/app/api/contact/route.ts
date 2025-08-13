import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { ReactNode } from 'react';
import { NextRequest } from 'next/server';
import contactParagraphs from '@/functions/contactParagraphs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();
    const paragraphs: ReactNode[] = contactParagraphs();

    const { data, error } = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: ['the.phelan.focusn@gmail.com'],
      replyTo: email,
      subject: 'Contact from Website',
      react: EmailTemplate({
        heading: `Hi ${name},`,
        paragraphs: paragraphs,
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
