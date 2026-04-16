import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  return (
    <div className="page">
      <h1>Contact</h1>
      <p>ChinaBuy helps global customers shop Chinese products with trusted purchasing and shipping support.</p>
      <div className="grid two">
        <form className="card" onSubmit={(e) => { e.preventDefault(); alert('Message sent (demo).'); }}>
          <h3>Customer Support</h3>
          <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
          <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
          <label>Message<textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
          <button>Send Message</button>
        </form>
        <div className="card">
          <h3>Support Channels</h3>
          <p><strong>WhatsApp:</strong> +1 (000) 000-0000</p>
          <p><strong>Email:</strong> support@chinabuy.demo</p>
          <p><strong>Service Hours:</strong> Mon-Sat, 9:00–18:00 (UTC+8)</p>
          <p className="muted">We reply in English and provide order/shipping support for overseas buyers.</p>
        </div>
      </div>
    </div>
  );
}
