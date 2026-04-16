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
      <h1>Cart</h1>
      {items.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {items.map((item) => (
            <div className="card cart-item" key={`${item.id}-${item.variantKey}`}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{formatMoney(item.prices[currency], currency)} each</p>
                <input type="number" min="1" value={item.quantity} onChange={(e) => updateQty(item.id, item.variantKey, Number(e.target.value))} />
                <button onClick={() => removeItem(item.id, item.variantKey)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="card"><p>Subtotal: {formatMoney(subtotal, currency)}</p><p>Estimated total: {formatMoney(subtotal, currency)} + shipping</p><Link className="btn" to="/checkout">Proceed to Checkout</Link></div>
        </>
      )}
    </div>
  );
}
