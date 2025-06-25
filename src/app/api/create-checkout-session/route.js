import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRICE_MAP = {
  'Performance Coaching': 300,
  'Executive Performance': 600,
  'Group Performance': 150,
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { sessionType, people } = body;

    const quantity = parseInt(people || 1);
    const pricePerPerson = PRICE_MAP[sessionType];

    if (!pricePerPerson) {
      return NextResponse.json({ error: 'Invalid session type' }, { status: 400 });
    }

    const totalAmount = pricePerPerson * quantity;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: sessionType,
              description: `${sessionType} booking for ${quantity} person(s)`,
            },
            unit_amount: totalAmount * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/sessions?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Stripe error' }, { status: 500 });
  }
}