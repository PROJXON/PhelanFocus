// components/CheckoutForm.jsx
"use client";
import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zip: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentMethod, error: pmError } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: formData.name,
          email: formData.email,
          address: { postal_code: formData.zip }
        }
      });

      if (pmError) throw pmError;

      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          email: formData.email
        })
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      const result = await stripe.confirmCardPayment(data.clientSecret);
      if (result.error) {
        throw result.error;
      }

      alert("✅ Payment successful!");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4 p-6 bg-white shadow-lg rounded">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="zip"
        placeholder="Zip Code"
        value={formData.zip}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <div className="p-2 border rounded">
        <CardElement options={{ hidePostalCode: true }} />
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-[var(--gold)] text-black py-2 px-4 rounded hover:bg-yellow-400"
      >
        {loading ? "Processing..." : "Confirm Booking & Pay"}
      </button>
    </form>
  );
}
