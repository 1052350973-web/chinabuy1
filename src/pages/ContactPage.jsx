import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  return (
    <div className="page">
      <h1>Contact</h1>
      <p>ChinaBuy helps global customers shop Chinese products with trusted purchasing and shipping support.</p>
      <div className="grid two">
        <form className="card" onSubmit={(e) => { e.preventDefault(); alert('Message sent (demo).'); }}>
          <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
          <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
          <label>Message<textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
          <button>Send</button>
        </form>
        <div className="card">
          <h3>Support Channels</h3>
          <p>WhatsApp: +1 (000) 000-0000</p>
          <p>Email: support@chinabuy.demo</p>
          <p>Service Hours: Mon-Sat, 9:00–18:00 (UTC+8)</p>
        </div>
      </div>
    </div>
  );
}
