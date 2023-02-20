import { waitForDomChange } from "@testing-library/react";
import React, {useState} from "react";
import Task from './Task'

function TaskList({tasks, list, setList, filteredList}) {

  function handleDelete (text) {
    const newTaskList = list.filter(task =>  task.text !== text)
    setList(newTaskList)
  }

  const allTasks = filteredList.map(task => {
    return <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete}/>
  })

  console.log(allTasks)

  return (
    <div className="tasks">
      {allTasks}
    </div>
  );
}

export default TaskList;

