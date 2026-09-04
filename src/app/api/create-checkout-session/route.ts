import { PriceMap } from '@/types/interfaces';
import { NextRequest, NextResponse } from 'next/server';
import getStripe from '@/lib/stripeObj';
import PRICE_MAP from '@/lib/priceMap';

export async function POST(req: NextRequest) {
  try {
    const stripe = await getStripe();
    const body = await req.json();
    const { sessionType, people } = body;

    const quantity = parseInt(people || 1);
    const pricePerPerson = PRICE_MAP[sessionType as keyof PriceMap];

    if (!pricePerPerson) {
      return NextResponse.json({ error: 'Invalid session type' }, { status: 400 });
    }

    const totalAmount = pricePerPerson * quantity;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!baseUrl) {
      throw new Error('NEXT_PUBLIC_BASE_URL is not configured');
    }

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
            unit_amount: totalAmount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/sessions?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: 'Stripe error' }, { status: 500 });
  }
}
