const modules = ['Orders', 'Products', 'Customers', 'Shipping Rules', 'Quotes', 'Payments'];

export default function AdminDashboardPage() {
  return (
    <div className="page">
      <h1>Admin Dashboard (Placeholder)</h1>
      <p>Scaffold ready for back-office management system.</p>
      <div className="grid">{modules.map((m) => <div className="card" key={m}><h3>{m}</h3><p>Module placeholder</p></div>)}</div>
    </div>
  );
}
