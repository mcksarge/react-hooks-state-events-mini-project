import React, { useState } from "react";

function CategoryFilter({ categories, catFilter }) {

  const [selected, setSelected] = useState('All')
  


  function filter (event) {
    catFilter(event.target.textContent)
    setSelected(event.target.textContent)
  }


//**********Renders the Categories into HTML Buttons******* */
  const catButtons = categories.map((cat) => {
    return (
      <button className={selected === cat ? 'selected' : ''} key={cat} onClick={filter}>{cat}</button>
    )
  })
//************************************************ */



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}


export default CategoryFilter;
