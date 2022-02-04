import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  let catList = []
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");


//**********Render category dropdown list, excluding (All) ********** */
  catList = categories.filter(cat => cat !== "All")
  catList = catList.map((cat) => {
    return (
      <option key={cat}>{cat}</option>
    )
  })



//**************handles submit button************* */
function handleSubmit (event) {
  event.preventDefault();
  onTaskFormSubmit({text, category})
}


//***************Handles form input************* */
function handleCatChange(event) {
  setCategory(event.target.value)
}

function handleTextChange(event) {
  setText(event.target.value)
}
//****************************************** */

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} value={text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCatChange} value={category}>
          {catList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
