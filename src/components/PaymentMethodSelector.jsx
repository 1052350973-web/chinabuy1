export default function PaymentMethodSelector({ value, onChange }) {
  return (
    <div className="card inset">
      <h3>Payment Method</h3>
      <div className="options-grid">
        <label className={`choice-card ${value === 'paypal' ? 'active' : ''}`}><input type="radio" checked={value === 'paypal'} onChange={() => onChange('paypal')} /> PayPal</label>
        <label className={`choice-card ${value === 'stripe' ? 'active' : ''}`}><input type="radio" checked={value === 'stripe'} onChange={() => onChange('stripe')} /> Stripe / Credit Card</label>
      </div>
      <p className="muted">Demo only. Payment integration coming soon.</p>
    </div>
  );
}
