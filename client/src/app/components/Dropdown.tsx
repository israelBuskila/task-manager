import React, { useState } from "react";
import "../styles/Dropdown.css";
import Checkbox from "./Checkbox";
import RenderIcon from "./RenderIcon";

type Option = {
  value: string;
  label: string;
};

const CATEGORY_OPTIONS: Option[] = [
    { value: "Work", label: "Work" },
    { value: "Personal", label: "Personal" },
    { value: "Shop", label: "Shop" },
    { value: "Pets", label: "Pets" },
    { value: "Self Care", label: "Self Care" },
  ]

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <div className="title"> Filter</div>
      <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {CATEGORY_OPTIONS.map((option) => (
            <label key={option.value} className="dropdown-item">
              <Checkbox
               checked={selectedItems.includes(option.value)}
               onChange={() => handleCheckboxChange(option.value)}
/>
<RenderIcon className="" iconName={option.value}/>
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
