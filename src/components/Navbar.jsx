export default function Navbar({ setStage, openHelp }) {
  return (
    <div className="navbar">
      <div>RetroSnap Studio</div>

      <div>
        <a onClick={() => setStage("landing")}>Home</a>
        <a onClick={() => setStage("camera")}>Camera</a>
        <a onClick={() => setStage("result")}>Result</a>

        <a onClick={openHelp}>How to Use</a>

        <a href="mailto:verma.pragya.2312@gmail.com?subject=RetroSnap Feedback">
          Feedback
        </a>
      </div>
    </div>
  );
}