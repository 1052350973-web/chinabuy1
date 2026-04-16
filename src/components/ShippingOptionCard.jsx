export default function ShippingOptionCard({ option, fee }) {
  return (
    <div className="card">
      <h3>{option.label}</h3>
      <p>Estimated delivery: {option.eta}</p>
      {fee !== undefined && <p>From ${fee}</p>}
    </div>
  );
}
