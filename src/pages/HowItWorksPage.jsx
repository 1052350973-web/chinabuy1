const steps = [
  {
    title: '1) Share what you want',
    detail: 'Browse listed products or submit any China marketplace link for sourcing support.'
  },
  {
    title: '2) Confirm order details',
    detail: 'We confirm item specs, destination country, and shipping method before purchase.'
  },
  {
    title: '3) We source in China',
    detail: 'ChinaBuy purchases from trusted Chinese sellers on your behalf.'
  },
  {
    title: '4) Quality check & repack',
    detail: 'Our warehouse team checks quantity and visible condition, then repacks for safer transit.'
  },
  {
    title: '5) Ship worldwide with tracking',
    detail: 'You receive tracking updates through delivery, from dispatch to your destination.'
  }
];

export default function HowItWorksPage() {
  return (
    <div className="page">
      <h1>How It Works</h1>
      <p className="muted">A clear, step-by-step service built for safe cross-border shopping.</p>
      <div className="grid">
        {steps.map((step) => (
          <div className="card" key={step.title}>
            <h3>{step.title}</h3>
            <p className="muted">{step.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
