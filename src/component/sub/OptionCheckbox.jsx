import React from "react";

const OptionCheckbox = ({ text, handleOnchange }) => {
  return (
    <div>
      <input type="checkbox" defaultChecked={true} onChange={handleOnchange} />
      <p>{text.toUpperCase()}</p>
    </div>
  );
};

export default OptionCheckbox;
