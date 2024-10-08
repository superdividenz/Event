// pages/checkout.js (modified)
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  const router = useRouter();
  const { seat } = router.query;
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ seat }),
    });
    const { sessionId } = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId });
    if (result.error) {
      console.error(result.error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Checkout</h1>
      {seat ? <p>You're checking out for seat: {seat}</p> : <p>No seat selected</p>}
      <button onClick={handlePayment} disabled={!seat || loading}>
        {loading ? 'Processing...' : 'Pay with Stripe'}
      </button>
    </div>
  );
};

export default Checkout;
