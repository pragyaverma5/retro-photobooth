export default function HowToUse({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>How It Works</h2>
        <ol>
          <li>Enter the studio</li>
          <li>Choose filters & number of shots</li>
          <li>Click "Start Capture"</li>
          <li>Strike your poses 📸</li>
          <li>Download your polaroid strip</li>
        </ol>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}