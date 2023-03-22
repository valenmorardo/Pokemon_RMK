import React from "react";

const CardTypes = ({ selectedTypes, setSelectedTypes }) => {
  const removeType = (e) => {
    e.preventDefault();
    setSelectedTypes(selectedTypes.filter((type) => type !== e.target.name));
  };

  return (
    <div>
      {selectedTypes.map((type) => (
        <div>
          <button name={type} onClick={(e) => removeType(e)}>
            X
          </button>
          <span>{type}</span>
        </div>
      ))}
    </div>
  );
};

export default CardTypes;
