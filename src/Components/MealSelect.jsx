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
        backgroundColor: "#1e2939",
        borderRedius: "0.5rem",
        padding: "2px",
        boxShadow: "none",
        "&:hover" : {
            borderColor: "#3b83f6" 
        },
        color: "white"
    }),
     singleValue: (base) => ({
    ...base,
    color: "white"
  }),
    menu: (base) => ({
        ...base,
        backgroundColor: "#1e2939",
        borderColor: "0.5rem",
        marginTop: "4px",
        
        border: "1px solid #e5e7eb"
    }),
    option: (base, {isFocused, isSelected }) => ({
        ...base,
        backgroundColor: isSelected
      ? "#3b82f6"
      : isFocused
      ? "#334155"
      : "#1e293b",
    color: "white",
    cursor: "pointer",
    padding: "8px 12px"
    })
};

const MealSelect = ({ mealType, setMealType }) => {
  return (
    <div className='w-full mb-4'>
       <label className="block text-gray-700 font-medium mb-2">Meal Type</label>
       <Select
        options={options}
        value={options.find((o) => o.value === mealType)}
        styles={customStyles}
        onChange={(selected) => setMealType(selected.value)}
        placeholder="Select a meal type"
        />
    </div>
  )
}

export default MealSelect
