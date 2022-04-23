import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handdleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cat) => [inputValue, ...cat]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={hanldeSubmit}>
      <p>{inputValue}</p>
      <input type="text" value={inputValue} onChange={handdleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
