import React from 'react';
import Select from 'react-select';

const options = [
    { value:"Breakfast", label: "Breakfast" },
    { value:"Lunch",     label: "Lunch" },
    { value:"Dinner",    label: "Dinner" },
    { value:"Dessert",   label: "Dessert" },
    { value:"Snacks",    label: "Snacks" },
];

const customStyles = {
    control: (base) => ({
    ...base,
    backgroundColor: "#1e293b",
    borderRadius: "0.5rem",
    padding: "4px",
    boxShadow: "none",
    borderColor: "#475569",
    color: "white",
    ":hover": {
      borderColor: "#3b82f6",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#1e293b",
    border: "1px solid #475569",
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected
      ? "#3b82f6"
      : isFocused
      ? "#334155"
      : "#1e293b",
    color: "white",
    cursor: "pointer",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#3b82f6",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "white",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "white",
    ":hover": {
      backgroundColor: "#1d4ed8",
      color: "white",
    },
  }),
};

const MealSelect = ({ mealType = [], setMealType }) => {
  return (
    <div className='w-full mb-4'>
       <label className="block text-gray-700 font-medium mb-2">Meal Type</label>
       <Select
        options={options}
        value={options.filter((o) => mealType.includes(o.value))}
        styles={customStyles}
        onChange={(selected) => setMealType(selected ? selected.map((opt) => opt.value) : [])}
        placeholder="Select a meal type"
        isMulti
        />
    </div>
  )
}

export default MealSelect
