import { EmailTemplate } from '@/components/EmailTemplate';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { Email } from '@/types/interfaces';
import { ReactNode } from 'react';
import confirmationParagraphs from '@/functions/confirmationParagraphs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message }: Email = await req.json();
    const paragraphs: ReactNode[] = confirmationParagraphs({ name, email, message });

    const { data, error } = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: [email, 'the.phelan.focusn@gmail.com'],
      subject: 'Confirmation email',
      react: EmailTemplate({
        heading: 'Hello Phelan,',
        paragraphs: paragraphs,
        lastMarginTop: true,
      }),
    });

    if (error) return Response.json({ error }, { status: 400 });

    return Response.json(data);
  } catch (err) {
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
