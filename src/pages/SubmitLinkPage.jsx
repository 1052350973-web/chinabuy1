import { useState } from 'react';

export default function SubmitLinkPage() {
  const [form, setForm] = useState({ link: '', name: '', quantity: 1, variant: '', notes: '', country: 'USA', email: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.link || !form.email) return alert('Please fill required fields.');
    alert('Thank you! We will review your request and send you a quotation within 24 hours.');
    setForm({ link: '', name: '', quantity: 1, variant: '', notes: '', country: 'USA', email: '' });
  };

  return (
    <div className="page">
      <h1>Submit a Product Link</h1>
      <p>If you found a product on 1688, Taobao, or another Chinese marketplace, send us the link and we will quote you within 24 hours.</p>
      <form className="card" onSubmit={onSubmit}>
        <label>Product Link<input value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} required /></label>
        <label>Product Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
        <label>Quantity<input type="number" min="1" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: Number(e.target.value) })} /></label>
        <label>Color / Size / Variant<input value={form.variant} onChange={(e) => setForm({ ...form, variant: e.target.value })} /></label>
        <label>Notes<textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></label>
        <label>Target Country<select value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}><option>USA</option><option>UK</option><option>Canada</option><option>Australia</option></select></label>
        <label>Email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></label>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}
