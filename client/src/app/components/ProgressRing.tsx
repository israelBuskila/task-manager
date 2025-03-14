import React from "react";
import '../styles/ProgressRing.css'

const ProgressRing: React.FC<{ progress: number }> = ({ progress }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="progress-ring">
            <svg className="progress-ring-svg" viewBox="0 0 100 100">
                <circle className="progress-ring-bg" cx="50" cy="50" r={radius}></circle>
                <circle
                    className="progress-ring-fill"
                    cx="50"
                    cy="50"
                    r={radius}
                    style={{ strokeDashoffset }}
                ></circle>
            </svg>
            <span className="progress-text">{progress}%</span>
        </div>
    );
};

export default ProgressRing;
