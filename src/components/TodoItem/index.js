import React from "react";
import './style.css';

function TodoItem(props) {
    const classes= ["main-todo__item", "todo-item"]

    if (props.todo.completed) {
        classes.push('todo-item__done')
    }

    return (
        <div className={classes.join(' ')}>
            <div className="todo-item__wrapper">
                <input className="todo-item__input"
                       type="checkbox"
                       onChange={() => props.onChange(props.todo.id)}
                       checked={props.todo.completed}
                       id={props.todo.id}
                />
                <label className="todo-item__text"
                       htmlFor={props.todo.id}>
                    {props.todo.title}
                </label>
                <button className="todo-item__button" onClick={props.removeTodo}><span>Close</span></button>
            </div>
        </div>
    )
}

export default TodoItem