import React, { useState } from "react";
import "../styles/Dropdown.css";
import RenderIcon from "./RenderIcon";
import { CATEGORY_OPTIONS } from "../constants/categoryOptions";

interface CategorySelectionProps {
  selectedItems: string;
  handleSelect: (item: string) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ selectedItems, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const getTitle = () => {
    if (!selectedItems) return 'Select Category';
    return (
      <div className="title">
        <RenderIcon
          className="icon"
          iconName={selectedItems}
          backgroundColor={CATEGORY_OPTIONS[selectedItems]?.backgroundColor}
          size={12}
        />
        <span>{selectedItems}</span>
      </div>
    );
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {getTitle()}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {Object.values(CATEGORY_OPTIONS).map((option) => (
            <label 
              key={option.value} 
              onClick={() => handleSelect(option.value)} 
              className={`dropdown-item ${selectedItems === option.value ? "selected" : ""}`}
            >
              <RenderIcon
                className="icon"
                iconName={option.value}
                backgroundColor={option.backgroundColor}
                size={16}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySelection;
