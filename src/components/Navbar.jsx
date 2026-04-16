import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useCurrency } from '../context/CurrencyContext';
import { SUPPORTED_CURRENCIES } from '../currency/currencyConfig';

export default function Navbar() {
  const { items } = useCart();
  const { user } = useAuth();
  const { currency, setCurrency } = useCurrency();
  const cartCount = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="nav-wrap">
      <div className="container nav">
        <Link to="/" className="logo">
          <span className="logo-badge">CB</span>
          ChinaBuy
        </Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/submit-link">Submit Link</NavLink>
          <NavLink to="/shipping">Shipping</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="nav-actions">
          <select value={currency} onChange={(e) => setCurrency(e.target.value)} aria-label="Currency">
            {SUPPORTED_CURRENCIES.map((c) => <option key={c}>{c}</option>)}
          </select>
          {user ? (
            <Link className="nav-link" to="/login">My Account</Link>
          ) : (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Register</Link>
            </>
          )}
          <Link className="cart-cta" to="/cart">🛒 Cart ({cartCount})</Link>
        </div>
      </div>
    </header>
  );
}
