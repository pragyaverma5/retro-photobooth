export default function Landing({ onStart }) {
  return (
    <div className="landing">
      <h1>RetroSnap Studio</h1>
      <p>Old-school charm, one click away.</p>

      <button className="start-btn" onClick={onStart}>
        Enter Studio
      </button>
    </div>
  );
}