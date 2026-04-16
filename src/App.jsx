import { useState } from "react";
import Landing from "./components/Landing";
import CameraView from "./components/CameraView";
import Result from "./components/Result";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HowToUse from "./components/HowToUse";

export default function App() {
  const [step, setStep] = useState("landing");
  const [photos, setPhotos] = useState([]);
  const [showHelp, setShowHelp] = useState(false); // ✅ NEW

  return (
    <>
      <Navbar
        setStage={setStep}
        openHelp={() => setShowHelp(true)} // ✅ PASS THIS
      />

      {/* HOW TO USE MODAL */}
      {showHelp && (
        <HowToUse onClose={() => setShowHelp(false)} />
      )}

      {step === "landing" && (
        <Landing onStart={() => setStep("camera")} />
      )}

      {step === "camera" && (
        <CameraView
          setPhotos={setPhotos}
          onComplete={() => setStep("result")}
        />
      )}

      {step === "result" && (
        <Result photos={photos} onRestart={() => setStep("camera")} />
      )}

      <Footer />
    </>
  );
}