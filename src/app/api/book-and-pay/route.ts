import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      throw new Error('RESEND_API_KEY is not set in the environment');
    }

    const resend = new Resend(resendKey);
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
      from: 'noreply@resend.dev',
      to: 'the.phelan.focus@gmail.com',
      subject: 'New Coaching Booking',
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
