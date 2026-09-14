import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getPhelanBackendSecrets } from '@/lib/serverSecrets';

export async function POST(req: NextRequest) {
  try {
    const { RESEND_API_KEY, EMAIL_TO } = await getPhelanBackendSecrets();

    if (!RESEND_API_KEY) {
      throw new Error('Resend API key is not configured');
    }

    const resend = new Resend(RESEND_API_KEY);
    const body = await req.json();
    const { name, email, phone, dateTime, goals, people, sessionType } = body;

    const message = `
New Coaching Booking:

🔹 Name: ${name}
🔹 Email: ${email}
🔹 Phone: ${phone}
🔹 Session Type: ${sessionType}
🔹 Preferred Date & Time: ${dateTime}
🔹 Number of People: ${people}
🔹 Goals: ${goals || 'N/A'}
`;

    await resend.emails.send({
      from: 'noreply@thephelanfocus.com',
      to: EMAIL_TO || 'the.phelan.focus@gmail.com',
      subject: 'New Coaching Booking',
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
