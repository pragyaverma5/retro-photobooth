export default function CountdownOverlay({ count }) {
  if (count === null) return null;

  return (
    <div className="countdown-overlay">
      {count === 0 ? "Pose" : count}
    </div>
  );
}