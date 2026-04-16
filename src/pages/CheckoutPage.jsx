import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { calculateShipping } from '../shipping/shippingCalculator';
import { SHIPPING_METHODS } from '../shipping/shippingRules';
import OrderSummary from '../components/OrderSummary';
import PaymentMethodSelector from '../components/PaymentMethodSelector';
import { generateOrderId } from '../services/orderService';
import { createMockOrder } from '../utils/orderHelpers';
import { PAYMENT_STATUS } from '../constants/paymentStatus';

const empty = { fullName: '', email: '', country: 'USA', phone: '', address1: '', address2: '', city: '', state: '', postalCode: '' };

export default function CheckoutPage() {
  const [form, setForm] = useState(empty);
  const [method, setMethod] = useState('economy');
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [serviceFeeEnabled, setServiceFeeEnabled] = useState(true);
  const { items, clearCart } = useCart();
  const { currency } = useCurrency();
  const navigate = useNavigate();

  const itemAmount = items.reduce((s, i) => s + i.prices[currency] * i.quantity, 0);
  const shippingFee = calculateShipping(form.country, method, Math.max(1, items.length));
  const serviceFee = serviceFeeEnabled ? 3 : 0;
  const total = itemAmount + shippingFee + serviceFee;

  const submit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.address1 || !form.city || !form.postalCode) {
      alert('Please complete all required fields.');
      return;
    }
    const order = createMockOrder({
      orderId: generateOrderId(), customerInfo: form, items, country: form.country, shippingMethod: method,
      shippingFee, serviceFee, totalAmount: total, currency, paymentMethod, paymentStatus: PAYMENT_STATUS.PENDING
    });
    clearCart();
    navigate('/order-success', { state: { order } });
  };

  return (
    <div className="page">
      <div className="section-head"><h1>Checkout</h1><p className="muted">Secure your order with trusted shipping and payment details.</p></div>
      <div className="checkout">
        <form className="card" onSubmit={submit}>
          <h3>Shipping Information</h3>
          {Object.entries(empty).map(([k]) => (
            <label key={k}>{k.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
              {k === 'country' ? (
                <select value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })}><option>USA</option><option>UK</option><option>Canada</option><option>Australia</option></select>
              ) : (
                <input value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} required={['fullName', 'email', 'address1', 'city', 'postalCode'].includes(k)} />
              )}
            </label>
          ))}
          <div className="card inset">
            <h3>Shipping Method</h3>
            <div className="options-grid">
              {Object.values(SHIPPING_METHODS).map((x) => (
                <label key={x.id} className={`choice-card ${method === x.id ? 'active' : ''}`}>
                  <input type="radio" checked={method === x.id} onChange={() => setMethod(x.id)} /> {x.label} ({x.eta})
                </label>
              ))}
            </div>
          </div>
          <PaymentMethodSelector value={paymentMethod} onChange={setPaymentMethod} />
          <label><input type="checkbox" checked={serviceFeeEnabled} onChange={(e) => setServiceFeeEnabled(e.target.checked)} /> Add optional premium handling service ($3)</label>
          <p>Orders are usually processed within 1–3 business days before international shipment.</p>
          <button type="submit">Place Order</button>
        </form>
        <OrderSummary currency={currency} itemAmount={itemAmount} shippingFee={shippingFee} serviceFee={serviceFee} total={total} />
      </div>
    </div>
  );
}
