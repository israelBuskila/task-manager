import React from "react";
import "../styles/CTAButton.css";

interface CTAButtonProps {
  label: string;
  variant?: "primary" | "primary-outline" | "secondary" | "secondary-outline";
  fullWidth?: boolean;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  variant = "primary",
  fullWidth = false,
  onClick
}) => {
  return (
    <button className={`button ${variant} ${fullWidth ? "full-width" : ""}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default CTAButton;
