import React from "react";

function NewTaskForm({ categories }) {
  let catList = []


//**********Render category dropdown list, excluding (All) ********** */
  catList = categories.filter(cat => cat !== "All")
  catList = catList.map((cat) => {
    return (
      <option key={cat}>{cat}</option>
    )
  })
//************************************************ */


  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {catList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
