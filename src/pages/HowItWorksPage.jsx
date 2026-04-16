export default function HowItWorksPage() {
  const steps = [
    'Browse products or submit a source link',
    'Place order and confirm shipping country',
    'ChinaBuy purchases from Chinese marketplaces',
    'Warehouse inspects and repacks your goods',
    'International shipping with tracking updates'
  ];
  return <div className="page"><h1>How It Works</h1><div className="grid">{steps.map((x) => <div className="card" key={x}>{x}</div>)}</div></div>;
}
