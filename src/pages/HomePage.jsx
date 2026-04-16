import { Link } from 'react-router-dom';
import { homeHighlights } from '../data/content';

export default function HomePage() {
  const categories = ['Jewelry', 'Home Goods', 'Pet Supplies', 'Auto Accessories', 'Trendy Gadgets'];
  const countries = ['USA', 'UK', 'Canada', 'Australia'];
  const steps = ['Choose products', 'Place order', 'We purchase in China', 'We inspect and pack', 'We ship worldwide'];

  return (
    <div className="page">
      <section className="hero">
        <span className="badge">Trusted Cross-Border Shopping Agent</span>
        <h1>Discover China’s Best Products, Delivered to Your Door Worldwide</h1>
        <p>ChinaBuy helps global shoppers source from Chinese marketplaces with secure purchasing, quality inspection, and reliable international shipping.</p>
        <div className="row">
          <Link className="btn" to="/shop">Start Shopping</Link>
          <Link className="btn secondary" to="/submit-link">Submit Product Link</Link>
        </div>
        <div className="hero-metrics">
          <div><strong>1–3 Days</strong><p>Order handling in our China warehouse.</p></div>
          <div><strong>3 Shipping Options</strong><p>Economy, standard, and express worldwide.</p></div>
          <div><strong>English Support</strong><p>Transparent service for overseas customers.</p></div>
        </div>
      </section>

      <section>
        <div className="section-head"><h2>Why ChinaBuy</h2><p className="muted">Built for trust, convenience, and global fulfillment.</p></div>
        <div className="grid">{homeHighlights.map((x) => <div key={x} className="card">{x}</div>)}</div>
      </section>

      <section>
        <div className="section-head"><h2>Popular Destinations</h2><p className="muted">We currently focus on fast service for these markets.</p></div>
        <div className="grid">{countries.map((x) => <div className="card" key={x}><h3>{x}</h3><p>Reliable cross-border shipping support.</p></div>)}</div>
      </section>

      <section>
        <div className="section-head"><h2>Top Product Categories</h2><p className="muted">Trending picks from Chinese suppliers.</p></div>
        <div className="grid">{categories.map((x) => <div className="card" key={x}><h3>{x}</h3><p>Quality-checked and packed for export.</p></div>)}</div>
      </section>

      <section className="card">
        <h2>International Logistics Timeline</h2>
        <p>Processing time: <strong>1–3 business days</strong></p>
        <p>Economy Shipping: 15–25 business days</p>
        <p>Standard Shipping: 10–15 business days</p>
        <p>Express Air Shipping: 5–8 business days</p>
      </section>

      <section>
        <h2>How Ordering Works</h2>
        <div className="grid">{steps.map((x, i) => <div className="card" key={x}><div className="tag">Step {i + 1}</div><h3>{x}</h3></div>)}</div>
      </section>
    </div>
  );
}
