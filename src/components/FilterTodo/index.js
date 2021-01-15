import React from "react";
import "./style.css";

function FilterTodo () {
    return (
        <div className="todo-filter">
            <span>tasks left</span>
            <button className="todo-filter__btn todo-filter__btn--all todo-filter__btn--active">All</button>
            <button className="todo-filter__btn todo-filter__btn--todo">ToDo</button>
            <button className="todo-filter__btn todo-filter__btn--completed">Completed</button>
            <span>Clear completed</span>
        </div>
    )
}

export default FilterTodo

