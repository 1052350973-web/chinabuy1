import { Link } from 'react-router-dom';
import { homeHighlights } from '../data/content';

export default function HomePage() {
  const categories = ['Jewelry', 'Home Goods', 'Pet Supplies', 'Auto Accessories', 'Trendy Gadgets'];
  const countries = ['USA', 'UK', 'Canada', 'Australia'];
  const steps = ['Choose products', 'Place order', 'We purchase in China', 'We inspect and pack', 'We ship worldwide'];

  return (
    <div className="page">
      <section className="hero card">
        <h1>Shop Chinese Products, Delivered Worldwide</h1>
        <p>We source, inspect, pack, and ship products from China to your country.</p>
        <div className="row"><Link className="btn" to="/shop">Start Shopping</Link><Link className="btn secondary" to="/submit-link">Submit a Product Link</Link></div>
      </section>
      <section><h2>Why ChinaBuy</h2><div className="grid">{homeHighlights.map((x) => <div key={x} className="card">{x}</div>)}</div></section>
      <section><h2>Shipping Countries</h2><div className="grid">{countries.map((x) => <div className="card" key={x}>{x}</div>)}</div></section>
      <section><h2>Popular Categories</h2><div className="grid">{categories.map((x) => <div className="card" key={x}>{x}</div>)}</div></section>
      <section className="card"><h2>Logistics Timeline</h2><p>Processing time: 1–3 business days</p><p>Economy Shipping: 15–25 business days</p><p>Standard Shipping: 10–15 business days</p><p>Express Air Shipping: 5–8 business days</p></section>
      <section><h2>Order Flow</h2><div className="grid">{steps.map((x) => <div className="card" key={x}>{x}</div>)}</div></section>
    </div>
  );
}
