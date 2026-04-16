export default function ShippingOptionCard({ option, fee, selected, onSelect }) {
  return (
    <div className={`card ${selected ? 'choice-card active' : ''}`}>
      <h3>{option.label}</h3>
      <p>Estimated delivery: {option.eta}</p>
      {fee !== undefined && <p><strong>From ${fee}</strong></p>}
      {onSelect && <button className={selected ? '' : 'secondary'} onClick={onSelect} type="button">{selected ? 'Selected' : 'Select Method'}</button>}
    </div>
  );
}
