import { EmailTemplate } from '@/components/EmailTemplate';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { Email } from '@/types/interfaces';
import { ReactNode } from 'react';
import confirmationParagraphs from '@/functions/confirmationParagraphs';

export async function POST(req: NextRequest) {
  try {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      throw new Error('RESEND_API_KEY is not set in the environment');
    }

    const resend = new Resend(resendKey);
    const { name, email, message }: Email = await req.json();
    const paragraphs: ReactNode[] = confirmationParagraphs({ name, email, message });

    const { data, error } = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: [email, 'the.phelan.focusn@gmail.com'],
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
