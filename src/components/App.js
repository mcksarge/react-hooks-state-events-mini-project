import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";




function App() {
  const [currentTasks, setCurrentTasks] = useState(TASKS);
  const [currentCategories, setCurrentCategories] = useState('All');



  function filter(cat) {
    setCurrentCategories(cat)
  }

  function newTask (task) {
    setCurrentTasks([...currentTasks, task]);
    console.log(currentTasks)
  }

//*********Deletes Task************* */
function handleDelete (name) {
  const newTasks = currentTasks.filter(task => {
    if (task.text !== name) {
      return task;
    }
  })
  setCurrentTasks(newTasks);

}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} catFilter={filter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={newTask} />
      <TaskList tasks={currentTasks} categories={currentCategories} taskDeleter={handleDelete} />
    </div>
  );
}

export default App;
