import { formatMoney } from '../utils/currencyFormatter';

export default function OrderSummary({ currency, itemAmount, shippingFee, serviceFee, total }) {
  return (
    <div className="card sticky">
      <h3>Order Summary</h3>
      <p className="muted">A clear breakdown before payment.</p>
      <div className="row" style={{ justifyContent: 'space-between' }}><span>Items</span><strong>{formatMoney(itemAmount, currency)}</strong></div>
      <div className="row" style={{ justifyContent: 'space-between' }}><span>Shipping</span><strong>{formatMoney(shippingFee, currency)}</strong></div>
      <div className="row" style={{ justifyContent: 'space-between' }}><span>Service Fee</span><strong>{formatMoney(serviceFee, currency)}</strong></div>
      <hr style={{ border: 0, borderTop: '1px solid #dbe2ee', margin: '10px 0' }} />
      <div className="row" style={{ justifyContent: 'space-between' }}><span>Total</span><strong style={{ fontSize: '1.15rem' }}>{formatMoney(total, currency)}</strong></div>
    </div>
  );
}
