import React, {useState} from "react";
import { TASKS } from "../data";
import Task from "./Task"; //Importing Task Component



function TaskList({tasks, categories, taskDeleter}) {

  let newList = []

  function handleDelete(name){
    taskDeleter(name)
  }

//***********Maps the Task data********** */
 

if (categories === 'All') {
  newList = tasks.map((task) => {
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
  newList = tasks.filter(task => task.category === categories);
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
