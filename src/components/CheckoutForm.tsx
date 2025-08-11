"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";
import { CheckoutFormData, CheckoutFormInput } from '@/types/interfaces';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    email: "",
    zip: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formInputs: CheckoutFormInput[] = [
    {
      type: "text",
      name: "name",
      placeholder: "Full Name"
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email Address"
    },
    {
      type: "text",
      name: "zip",
      placeholder: "ZIP Code"
    },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError("Card element not found");
      setLoading(false);
      return;
    }

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
      const message = err instanceof Error ? err.message : "An unknown error occurred";
      setError(message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4 p-6 bg-white shadow-lg rounded">
      {formInputs.map((input, i) => (
        <input
          key={i}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      ))}

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
