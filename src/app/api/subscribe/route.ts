import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
    }

    await resend.emails.send({
      from: 'noreply@resend.dev',
      to: ['the.phelan.focus@gmail.com'],
      subject: 'New Newsletter Subscriber',
      html: `<p>You have a new subscriber: <strong>${email}</strong></p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}
