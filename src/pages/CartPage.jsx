import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { formatMoney } from '../utils/currencyFormatter';

export default function CartPage() {
  const { items, removeItem, updateQty } = useCart();
  const { currency } = useCurrency();
  const subtotal = items.reduce((s, i) => s + i.prices[currency] * i.quantity, 0);

  return (
    <div className="page">
      <div className="section-head"><h1>Cart</h1><p className="muted">Review products before checkout.</p></div>
      {items.length === 0 ? <div className="card"><p>Your cart is empty.</p><Link className="btn" to="/shop">Browse products</Link></div> : (
        <>
          {items.map((item) => (
            <div className="card cart-item" key={`${item.id}-${item.variantKey}`}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{formatMoney(item.prices[currency], currency)} each</p>
                <label>Quantity<input type="number" min="1" value={item.quantity} onChange={(e) => updateQty(item.id, item.variantKey, Number(e.target.value))} /></label>
              </div>
              <button className="secondary" onClick={() => removeItem(item.id, item.variantKey)}>Remove</button>
            </div>
          ))}
          <div className="card">
            <h3>Order Preview</h3>
            <p>Subtotal: <strong>{formatMoney(subtotal, currency)}</strong></p>
            <p>Estimated total: {formatMoney(subtotal, currency)} + shipping</p>
            <Link className="btn" to="/checkout">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
}
