export default function StatusTimeline({ steps }) {
  return <ul className="timeline">{steps.map((s) => <li key={s}>{s}</li>)}</ul>;
}
