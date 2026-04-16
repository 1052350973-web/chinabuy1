import { Link } from 'react-router-dom';
import { homeHighlights } from '../data/content';

const shippingTimeline = [
  {
    label: 'Order confirmation & purchase',
    timeline: 'Within 24 hours',
    detail: 'Our sourcing team confirms availability and buys from trusted China marketplaces.'
  },
  {
    label: 'Warehouse quality check',
    timeline: '1–3 business days',
    detail: 'Each order is checked for visible defects, quantity, and model/variant match.'
  },
  {
    label: 'International shipping',
    timeline: '5–25 business days',
    detail: 'Choose Express (5–8), Standard (10–15), or Economy (15–25) shipping with tracking.'
  }
];

const servicePoints = [
  {
    title: 'Sourced from China',
    body: 'We purchase directly from major Chinese marketplaces and verified suppliers.'
  },
  {
    title: 'Quality checked',
    body: 'Your items are inspected at our warehouse before they are packed for export.'
  },
  {
    title: 'Worldwide delivery',
    body: 'We ship to major regions including the USA, UK, Canada, and Australia.'
  }
];

export default function HomePage() {
  const categories = ['Jewelry', 'Home Goods', 'Pet Supplies', 'Auto Accessories', 'Trendy Gadgets'];
  const countries = ['USA', 'UK', 'Canada', 'Australia'];
  const steps = ['Choose products', 'Place order', 'We purchase in China', 'We inspect and pack', 'We ship worldwide'];

  return (
    <div className="page">
      <section className="hero card">
        <h1>Shop Chinese Products with Verified Handling and Tracked Delivery</h1>
        <p>From sourcing in China to quality checks and international shipping, we keep every step transparent.</p>
        <div className="row">
          <Link className="btn" to="/shop">Shop with Confidence</Link>
          <Link className="btn secondary" to="/submit-link">Get a Sourcing Quote</Link>
        </div>
      </section>

      <section>
        <h2>Why ChinaBuy</h2>
        <div className="grid">{homeHighlights.map((x) => <div key={x} className="card">{x}</div>)}</div>
      </section>

      <section>
        <h2>Trusted Service Promise</h2>
        <div className="grid">{servicePoints.map((x) => <div className="card" key={x.title}><h3>{x.title}</h3><p className="muted">{x.body}</p></div>)}</div>
      </section>

      <section className="card">
        <h2>Clear Shipping Timeline</h2>
        <div className="timeline-grid">
          {shippingTimeline.map((item) => (
            <div className="timeline-item" key={item.label}>
              <p className="timeline-label">{item.label}</p>
              <p className="timeline-time">{item.timeline}</p>
              <p className="muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Shipping Countries</h2>
        <div className="grid">{countries.map((x) => <div className="card" key={x}>{x}</div>)}</div>
      </section>

      <section>
        <h2>Popular Categories</h2>
        <div className="grid">{categories.map((x) => <div className="card" key={x}>{x}</div>)}</div>
      </section>

      <section>
        <h2>Order Flow</h2>
        <div className="grid">{steps.map((x) => <div className="card" key={x}>{x}</div>)}</div>
      </section>
    </div>
  );
}
