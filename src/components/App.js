import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [list, setList] = useState(TASKS)
  const [filterBy, setFilterBy] = useState("All")
  const filteredList = TASKS.filter(task => {
    if (filterBy === "All") {
      return true;
    } else {
      return task.category === filterBy
  }})
  
  function handleSelect(event) {
    event.target.className === 'selected' ? event.target.className = "" : event.target.className = "selected";
    setFilterBy(event.target.innerText);
    console.log(event.target.innerText);
    setList(filteredList)
  }
    //const filteredList = list.filter(task => t.category === event.target.innerText && event.target.className === "selected")
    
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={TASKS} list={list} setList={setList} handleSelect={handleSelect}/>
      <NewTaskForm />
      <TaskList tasks={TASKS} list={list} setList={setList} filteredList={filteredList}/>
    </div>
  );
}

export default App;

