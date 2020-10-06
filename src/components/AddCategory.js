import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputText, setInputText] = useState("");

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(inputText.trim().length > 2 ){
        setCategories( cate => [inputText,...cate ]);
    }
    setInputText('');
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* <h2>Add Category</h2> */}
      <input type="text" value={inputText}  onChange={handleInputText}/>
    </form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;