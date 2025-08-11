import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: [email, 'the.phelan.focusn@gmail.com'],
      subject: 'Confirmation email',
      react: EmailTemplate({
        heading: "Hello Phelan,",
        paragraphs: [
          <>My name is <strong>{name}</strong>. I'm reaching out to you regarding a matter I’d like to discuss.</>,
          <>You can reach me at: <a href={`mailto:${email}`} className="text-[#007BFF]">{email}</a>.</>,
          <>{message}</>,
        ],
        lastMarginTop: true,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json(data);
  } catch (err) {
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
