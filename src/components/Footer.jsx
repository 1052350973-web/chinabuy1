import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <Link to="/contact">About us</Link>
        <Link to="/shipping">Shipping policy</Link>
        <Link to="/contact">Contact</Link>
        <a href="#">Terms</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}
