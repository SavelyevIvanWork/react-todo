import React from "react";
import './style.css'
import TodoItem from "../TodoItem";

function TodoLIst(props) {
    return (
        <div className='main-todo'>
            {props.todos.map((todo, index) => {
                return <TodoItem removeTodo={props.removeTodo(todo.id)}
                                 todo={todo}
                                 key={todo.id}
                                 index={index}
                                 onChange={props.onToggle}/>
            })}
        </div>
    )
}

export default TodoLIst