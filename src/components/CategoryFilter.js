import React, {useState} from "react";

function CategoryFilter({categories, list, setList, handleSelect}) {

// const [filterBy, setFilterBy] = useState("All")

const categoryButtons = categories.map(category => <button className="" key={category} onClick={(event) => handleSelect(event)}>{category}</button>)

// function handleSelect(event) {
//   event.target.className === 'selected' ? event.target.className = "" : event.target.className = "selected"
//   setFilterBy(event.target.value)
//   console.log(event.target.value)
//   const filteredList = list.filter(task => {
//     if (filterBy === "All") {
//       return true;
//     } else {
//       return task.category === filterBy
//     }
//   })
//   //const filteredList = list.filter(task => t.category === event.target.innerText && event.target.className === "selected")
//   setList(filteredList)
// }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;



//pass the list of categories down to this component from app
//add buttons for each category
//  each button needs a key prop
//  onClick, change class to 'selected'. other buttons should not change class
//    list of tasks should be filtered based on the selected category
//    if the button for 'All' is selected, all tasks display


//map over categories array and produce a button for each with an event listener and key

//when a category button is clicked,
//  assign a new const array and filter the "list" so it returns only those <Task />s
// whose task.category matches one of the categories whose className = "selected"
//if 'All' selected, copy the "list" and setList on it
