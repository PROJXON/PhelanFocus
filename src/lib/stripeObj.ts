import Stripe from 'stripe';

export default function getStripe() {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    throw new Error('Stripe key is not set in the environment');
  }

  return new Stripe(stripeKey);
}
