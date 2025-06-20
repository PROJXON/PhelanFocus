import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { sessionType, quantity } = await req.json();
    console.log('📦 Received sessionType:', sessionType);
    console.log('👥 Quantity:', quantity);

    const prices = {
      'Performance Coaching': 'price_1RbvhOD8pFuZYyEDFIWA675D',
      'Executive Performance': 'price_1RbvhzD8pFuZYyEDG4Yb6rY2',
      'Group Performance': 'price_1RbvktD8pFuZYyEDk2kIqzHu',
    };

    const priceId = prices[sessionType];
    if (!priceId) {
      console.error('❌ Invalid sessionType:', sessionType);
      return new Response(JSON.stringify({ error: 'Invalid session type' }), { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: quantity > 0 ? quantity : 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    console.log('✅ Stripe session created:', session.url);
    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    console.error('🔥 Stripe error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
