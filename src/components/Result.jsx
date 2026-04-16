import PhotoStrip from "./PhotoStrip";
import { downloadStrip } from "../utils/strip";

export default function Result({ photos, onRestart }) {
    return (
        <div className="result" id="result">
            <div className="result-left">
                <button className="retake-btn" onClick={onRestart}>
                    Back to Studio
                </button>
            </div>


            <div className="result-right">
                <div className="result-container">
                    <PhotoStrip photos={photos} />
                </div>
                <button
                    className="download-btn"
                    onClick={() => downloadStrip(photos)}
                >
                    Develop Strip
                </button>
            </div>
        </div>
    );
}