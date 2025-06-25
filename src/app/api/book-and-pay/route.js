// /app/api/book-and-pay/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  const {
    name,
    email,
    phone,
    dateTime,
    goals,
    people,
    sessionType
  } = body;

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

  try {
    const response = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: 'nghia.ha.projxon@gmail.com',
      subject: 'New Coaching Booking',
      text: message, // 👈 This fills the "Plain Text" content
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
