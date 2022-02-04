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


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} catFilter={filter} />
      <NewTaskForm categories={CATEGORIES} />
      <TaskList tasks={TASKS} categories={currentCategories} />
    </div>
  );
}

export default App;
