import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripeObj';
import PRICE_MAP from '@/lib/priceMap';
import { PriceMap } from '@/types/interfaces';

export async function POST(req: NextRequest) {
  try {
    const { sessionType, people } = await req.json();

    const unitAmount = PRICE_MAP[sessionType as keyof PriceMap];
    if (!unitAmount) return NextResponse.json({ error: 'Invalid session type' }, { status: 400 });

    const totalPeople = parseInt(people || 1);
    const total = unitAmount * totalPeople;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: paymentIntent.amount,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Stripe error:', errorMessage);
    return NextResponse.json({ error: errorMessage || 'Internal Server Error' }, { status: 500 });
  }
}
