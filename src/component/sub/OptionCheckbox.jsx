import React from "react";

const OptionCheckbox = ({ text, handleOnchange, isSelect }) => {
  return (
    <div>
      <input type="checkbox" defaultChecked={isSelect} onChange={handleOnchange} />
      <p>{text.toUpperCase()}</p>
    </div>
  );
};

export default OptionCheckbox;
