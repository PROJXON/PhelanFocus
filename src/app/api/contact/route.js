import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: ['the.phelan.focusn@gmail.com'],
      replyTo: email,
      subject: 'Contact from Website',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json(data);
  } catch (err) {
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
