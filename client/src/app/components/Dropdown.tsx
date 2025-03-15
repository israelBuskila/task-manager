import React, { useState } from "react";
import "../styles/Dropdown.css";
import Checkbox from "./Checkbox";
import RenderIcon from "./RenderIcon";
import { CATEGORY_OPTIONS } from "../constants/categoryOptions";

interface DropdownProps {
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ selectedItems, setSelectedItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (id: string) => {
    const updatedItems = selectedItems.includes(id)
      ? selectedItems.filter((item) => item !== id) // Remove if already selected
      : [...selectedItems, id]; // Add if not selected

    setSelectedItems(updatedItems); // Directly pass the updated array
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <div className="title">Filter</div>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {Object.values(CATEGORY_OPTIONS).map((option) => (
            <label key={option.value} className="dropdown-item">
              <Checkbox
                checked={selectedItems.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
              />
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

export default Dropdown;
