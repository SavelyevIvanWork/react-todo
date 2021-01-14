import React, {useState} from "react";

function AddTodo({onCreate}) {
    const [value, setValue] = useState("")

    function onChangeHandler(e) {
        setValue(e.target.value)
    }

    function addTodoHandler(e) {
        const enter = e.keyCode
        if (value.trim() && enter === 13) {
            onCreate(value)
        }
    }

    return (
        <div className="main-todo__input-wrapper" onKeyDown={addTodoHandler}>
            <input
                className='main-todo__input'
                type="text"
                placeholder='Enter your task name here'
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    )
}

export default AddTodo