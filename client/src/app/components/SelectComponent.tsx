import React, { useState } from 'react';
import Select, { SingleValue, MultiValue } from 'react-select';

// Define option type
type OptionType = { value: string; label: string };

// Sample options
const options: OptionType[] = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'nodejs', label: 'Node.js' }
];

const SelectComponent: React.FC = () => {
  // State for single select
  const [selectedSingle, setSelectedSingle] = useState<OptionType | null>(null);
  // State for multi-select
  const [selectedMulti, setSelectedMulti] = useState<OptionType[]>([]);

  // Handle single select change
  const handleSingleChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedSingle(selectedOption);
    console.log('Single Select:', selectedOption);
  };

  // Handle multi-select change
  const handleMultiChange = (selectedOptions: MultiValue<OptionType>) => {
    setSelectedMulti(selectedOptions as OptionType[]);
    console.log('Multi Select:', selectedOptions);
  };

  return (
    <div style={{ width: 300, margin: '20px auto', fontFamily: 'Arial' }}>
      <h3>Single Select</h3>
      <Select
        options={options}
        value={selectedSingle}
        onChange={handleSingleChange}
        placeholder="Select an option..."
      />

      <h3>Multi Select</h3>
      <Select
        isMulti
        options={options}
        value={selectedMulti}
        onChange={handleMultiChange}
        placeholder="Select multiple options..."
      />
    </div>
  );
};

export default SelectComponent;
