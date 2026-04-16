export const startCamera = async (videoRef) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  } catch (err) {
    console.error("Camera error:", err);
  }
};

export function captureFrame(video, filter) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // flip back before drawing
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);

  ctx.filter = filter;
  ctx.drawImage(video, 0, 0);

  return canvas.toDataURL("image/png");
}