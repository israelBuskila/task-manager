import React from "react";
import "../styles/RenderIcon.css"; 

interface RenderIconProps {
    iconName: string;
    className?: string;
    backgroundColor?: string;
    size?: number; 
}

const RenderIcon: React.FC<RenderIconProps> = ({ iconName, className, backgroundColor, size = 24 }) => {
    const getIconPath = `/icons/icontype=${iconName}.png`;

    return (
        <img
            className={`icon ${className || ""}`}
            src={getIconPath}
            alt={iconName}
            style={{
                backgroundColor: backgroundColor || "transparent",
                padding: backgroundColor ? "8px" : "0px",
                borderRadius: "8px",
                width: `${size}px`,
                height: `${size}px`
            }}
        />
    );
};

export default RenderIcon;
