import React, { useState } from "react";
import "../styles/Input.css";

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`input-container ${error ? "error" : ""} ${isFocused ? "focused" : ""}`}>
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {value && (
          <button className="clear-button" onClick={() => onChange("")}>
            ✕
          </button>
        )}
      </div>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default Input;
