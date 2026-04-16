export default function PhotoStrip({ photos }) {
  return (
    <div className="photo-strip">
      {photos.map((p, i) => (
        <img key={i} src={p} className="strip-photo" />
      ))}

      <p className="strip-caption">
        Caught in a moment<br />
        {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}