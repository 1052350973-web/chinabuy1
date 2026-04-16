import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>ChinaBuy</strong>
          <p className="muted">Cross-border sourcing and global delivery from China, built for international shoppers.</p>
        </div>
        <Link to="/contact">About us</Link>
        <Link to="/shipping">Shipping policy</Link>
        <Link to="/contact">Contact</Link>
        <a href="#">Terms</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}
