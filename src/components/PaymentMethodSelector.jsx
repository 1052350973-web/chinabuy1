export default function PaymentMethodSelector({ value, onChange }) {
  return (
    <div className="card">
      <h3>Payment Method</h3>
      <label><input type="radio" checked={value === 'paypal'} onChange={() => onChange('paypal')} /> PayPal</label>
      <label><input type="radio" checked={value === 'stripe'} onChange={() => onChange('stripe')} /> Stripe / Credit Card</label>
      <p className="muted">Demo only. Payment integration coming soon.</p>
    </div>
  );
}
