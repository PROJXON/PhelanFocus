'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from "@/components/Hero";
import '../sessions/sessions.css';
import './book-and-pay.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm({ sessionType, people }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [clientSecret, setClientSecret] = useState('');
  const [amount, setAmount] = useState(0); // in cents
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [cardPreview, setCardPreview] = useState({
    number: '',
    expiry: '',
  });

  useEffect(() => {
    const fetchIntent = async () => {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionType, people }),
      });
      const data = await res.json();
      setClientSecret(data.clientSecret);
      setAmount(data.amount); // in cents
    };

    fetchIntent();
  }, [sessionType, people]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: formData.name,
          email: formData.email,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      router.push('/thank-you');
    }
  };

  const handleCardInput = (event) => {
    const number = event.value?.cardNumber || '';
    const expiry = event.value?.expiry || '';
    setCardPreview({
      number: number || '',
      expiry: expiry || '',
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white text-black p-8 rounded-2xl shadow-xl space-y-6">
      {/* Credit Card Preview */}
      <div className="w-full flex justify-center">
        <div
          className="credit-card-container"
          style={{ backgroundColor: '#144a8f', color: '#F9C705' }}
        >
          <header className="credit-header flex justify-between items-center">
            <span className="credit-logo flex items-center gap-2">
              <img src="PhelanFocusLOGO-02.png" alt="logo" className="w-12" />
              <h5 className="text-base font-medium">PhelanFocus</h5>
            </span>
            <img src="sessions/chip.png" alt="chip" className="chip w-14" />
          </header>
          <div className="card-details mt-10 flex justify-between items-end">
            <div className="name-number">
              <h6 className="text-xs">Card Number</h6>
              <h5 className="number text-lg tracking-wider mt-1">
                {cardPreview.number || '**** **** **** ****'}
              </h5>
              <h5 className="name mt-5">{formData.name || 'Your Name'}</h5>
            </div>
            <div className="valid-date text-right">
              <h6 className="text-xs">Valid Thru</h6>
              <h5>{cardPreview.expiry || 'MM/YY'}</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">{sessionType}</h2>

        <input
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-300 bg-[#f9f9f9] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F9C705]"
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-300 bg-[#f9f9f9] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F9C705]"
        />

        <div className="p-3 border border-gray-300 rounded-lg bg-[#f9f9f9]">
          <CardElement
            options={{ style: { base: { fontSize: '16px' } } }}
            onChange={handleCardInput}
          />
        </div>

        {/* Total Amount Display */}
        {amount > 0 && (
          <p className="text-center text-lg font-semibold text-gray-700">
            Total: ${(amount / 100).toFixed(2)}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-[#F9C705] hover:bg-yellow-500 text-black font-semibold text-lg py-3 px-4 rounded-lg transition duration-300"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
}

export default function BookAndPayPage() {
  const searchParams = useSearchParams();
  const sessionType = searchParams.get('sessionType') || 'Coaching Session';
  const people = searchParams.get('people') || 1;

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />

      <Hero sectionClass="sessions-hero" bgImage="/sessions/book-and-pay.jpeg" header={sessionType} />

      <div className="py-10 px-4">
        <Elements stripe={stripePromise}>
          <CheckoutForm sessionType={sessionType} people={people} />
        </Elements>
      </div>

      <Footer />
    </div>
  );
}
