import ShippingOptionCard from '../components/ShippingOptionCard';
import { faqItems } from '../data/content';
import { SHIPPING_METHODS, SHIPPING_RULES } from '../shipping/shippingRules';

export default function ShippingPage() {
  return (
    <div className="page">
      <h1>Shipping</h1>
      <div className="card">
        <p>Our flow: you order → we purchase in China → warehouse quality check → international shipment.</p>
        <p>Processing time: 1–3 business days before dispatch.</p>
        <p>Shipping cost depends on destination, weight, and selected method.</p>
      </div>
      <section>
        <h2>Shipping Methods</h2>
        <div className="grid">{Object.values(SHIPPING_METHODS).map((opt) => <ShippingOptionCard key={opt.id} option={opt} />)}</div>
      </section>
      <div className="card">
        <h2>Sample Base Fees by Country</h2>
        {Object.entries(SHIPPING_RULES).map(([country, rule]) => (
          <p key={country}><strong>{country}</strong>: Economy ${rule.economy} / Standard ${rule.standard} / Express ${rule.express}</p>
        ))}
      </div>
      <section>
        <h2>FAQ</h2>
        <div className="faq-list">
          {faqItems.map((f) => <div key={f.q} className="card"><h3>{f.q}</h3><p>{f.a}</p></div>)}
        </div>
      </section>
    </div>
  );
}
