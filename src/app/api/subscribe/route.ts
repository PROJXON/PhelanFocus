import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { getPhelanBackendSecrets } from '@/lib/serverSecrets';

export async function POST(req: NextRequest) {
  try {
    const { RESEND_API_KEY, EMAIL_TO } = await getPhelanBackendSecrets();

    if (!RESEND_API_KEY) {
      throw new Error('Resend API key is not configured');
    }

    const resend = new Resend(RESEND_API_KEY);
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
      });
    }

    await resend.emails.send({
      from: 'noreply@resend.dev',
      to: [EMAIL_TO || 'the.phelan.focus@gmail.com'],
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
