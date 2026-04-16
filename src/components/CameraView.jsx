import { useEffect, useRef, useState } from "react";
import { startCamera, captureFrame } from "../utils/camera";
import { FILTERS } from "../utils/filters";

export default function CameraView({ setPhotos, onComplete }) {
  const videoRef = useRef(null);

  // ✅ STATES
  const [filter, setFilter] = useState("normal");
  const [count, setCount] = useState(null);
  const [flash, setFlash] = useState(false);
  const [photoCount, setPhotoCount] = useState(4);

  // ✅ START CAMERA SAFELY
  useEffect(() => {
    startCamera(videoRef);
  }, []);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // ✅ COUNTDOWN
  const runCountdown = async () => {
    for (let i = 3; i >= 0; i--) {
      setCount(i);
      await delay(1000);
    }
    setCount(null);
  };

  // ✅ CAPTURE FLOW
  const startCapture = async () => {
    const shots = [];

    for (let i = 0; i < photoCount; i++) {
      await runCountdown();

      // flash
      setFlash(true);
      await delay(150);
      setFlash(false);

      const img = captureFrame(videoRef.current, FILTERS[filter]);

      if (img) shots.push(img);

      await delay(800);
    }

    setPhotos(shots);
    onComplete();
  };

  return (
    <div className="camera-section" id="camera">
      {/* HEADER */}
      <div className="camera-header">
        <h1>RetroSnap Studio</h1>
        <p>Old-school charm, one click away.</p>
      </div>

      {/* CAMERA */}
      <div className="camera-card" style={{ position: "relative" }}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="camera-video"
          style={{
            filter: FILTERS[filter],
            transform: "scaleX(-1)", // ✅ mirror here
            width: "100%",
            height: "100%",
          }}
        />

        {/* COUNTDOWN */}
        {count !== null && (
          <div className="countdown">
            {count === 0 ? "Pose" : count}
          </div>
        )}

        {/* FLASH */}
        {flash && <div className="flash" />}
      </div>

      {/* CAPTURE BUTTON */}
      <button className="capture-btn" onClick={startCapture}>
        Start Capture
      </button>

      {/* PHOTO COUNT */}
      <div className="photo-count">
        {[3, 4].map((n) => (
          <button
            key={n}
            className={photoCount === n ? "active" : ""}
            onClick={() => setPhotoCount(n)}
          >
            {n} shots
          </button>
        ))}
      </div>

      {/* FILTERS */}
      <div className="filters">
        {Object.keys(FILTERS).map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}