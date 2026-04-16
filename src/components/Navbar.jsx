import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useCurrency } from '../context/CurrencyContext';
import { SUPPORTED_CURRENCIES } from '../currency/currencyConfig';

export default function Navbar() {
  const { items } = useCart();
  const { user } = useAuth();
  const { currency, setCurrency } = useCurrency();

  return (
    <header className="nav-wrap">
      <div className="container nav">
        <Link to="/" className="logo">ChinaBuy</Link>
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
          {user ? <Link to="/login">My Account</Link> : <><Link to="/login">Login</Link><Link to="/register">Register</Link></>}
          <Link to="/cart">🛒 ({items.reduce((s, i) => s + i.quantity, 0)})</Link>
        </div>
      </div>
    </header>
  );
}
