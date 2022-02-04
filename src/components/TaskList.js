import React, {useState} from "react";
import { TASKS } from "../data";
import Task from "./Task"; //Importing Task Component



function TaskList({tasks, categories}) {
  const [currentTasks, setCurrentTask] = useState(tasks)
  let newList = []
//*********Deletes Task************* */
  function handleDelete (name) {
    const newTasks = currentTasks.filter(task => {
      if (task.text !== name) {
        return task;
      }
    })
    setCurrentTask(newTasks);

  }
//*************************************** */

//***********Maps the Task data********** */
 

if (categories === 'All') {
  newList = currentTasks.map((task) => {
    return (
      <Task 
      key={task.text} 
      text={task.text} 
      category={task.category} 
      deleter={handleDelete} 
      />
    )
  })
} else {
  newList = currentTasks.filter(task => task.category === categories);
  newList = newList.map((task) => {
    return (
      <Task 
      key={task.text} 
      text={task.text} 
      category={task.category} 
      deleter={handleDelete} 
      />
    )}
  )}
  

    

//****************************************** */

  return (
    <div className="tasks">
      {newList}
    </div>
  );
}

export default TaskList;
