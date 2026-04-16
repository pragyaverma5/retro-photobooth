export const downloadStrip = (photos) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const width = 300;
  const height = photos.length * 200 + 80;

  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = "#f5f0e8";
  ctx.fillRect(0, 0, width, height);

  let y = 10;

  const loadImages = photos.map(src => {
    return new Promise(resolve => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
    });
  });

  Promise.all(loadImages).then(images => {
    images.forEach(img => {
      ctx.drawImage(img, 10, y, width - 20, 180);
      y += 190;
    });

    ctx.fillStyle = "#000";
    ctx.font = "12px monospace";
    ctx.fillText("captured moments", 20, height - 40);
    ctx.fillText(new Date().toLocaleDateString(), 20, height - 20);

    const link = document.createElement("a");
    link.download = "retrostrip.png";
    link.href = canvas.toDataURL();
    link.click();
  });
};