import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export async function POST(req) {
  try {
    const { sessionType, people } = await req.json();

    const PRICE_MAP = {
      'Performance Coaching': 300,
      'Executive Performance': 600,
      'Group Performance': 150,
    };

    const unitAmount = PRICE_MAP[sessionType];

    if (!unitAmount) {
      return NextResponse.json(
        { error: 'Invalid session type' },
        { status: 400 }
      );
    }

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
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
