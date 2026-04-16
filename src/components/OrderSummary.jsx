import { formatMoney } from '../utils/currencyFormatter';

export default function OrderSummary({ currency, itemAmount, shippingFee, serviceFee, total }) {
  return (
    <div className="card sticky">
      <h3>Order Summary</h3>
      <p>Items: {formatMoney(itemAmount, currency)}</p>
      <p>Shipping: {formatMoney(shippingFee, currency)}</p>
      <p>Service Fee: {formatMoney(serviceFee, currency)}</p>
      <hr />
      <strong>Total: {formatMoney(total, currency)}</strong>
    </div>
  );
}
