import React, { useState } from "react";
import  AddCategory  from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories = ['Naruto', 'Boruto', 'Walking Dead', 'Arrow' ];
  const [categories, setCategories] = useState([
    "Naruto",
  ]);

//   const handleAdd = () =>{
//     setCategories([...categories, 'Pokemon']);
//   }

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr/>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map(category => (
            <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
