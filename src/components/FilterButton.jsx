import { useEffect, useRef } from "react";

export default function FilterButton({ name, filter, active, videoRef, onClick }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!videoRef.current) return;

      const ctx = canvasRef.current.getContext("2d");
      ctx.filter = filter;
      ctx.drawImage(videoRef.current, 0, 0, 48, 36);
    }, 2000);

    return () => clearInterval(interval);
  }, [videoRef, filter]);

  return (
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
  );
}