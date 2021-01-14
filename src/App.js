import React from "react";
import './App.css';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";


function App() {
    const [todos, setTodos] = React.useState(
        [
            {id: 1, completed: false, title: 'Купить хлеб'},
            {id: 2, completed: false, title: 'Купить молоко'},
            {id: 3, completed: false, title: 'Купить масло'},
        ]
    )

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    const removeTodo = (id) => () => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false,
        }]))
    }

    return (
        <div className='main-todo__wrapper'>
            <h1 className='main-todo__title'>Your todo list</h1>
            <AddTodo onCreate={addTodo}/>
            <TodoList removeTodo={removeTodo} todos={todos} onToggle={toggleTodo}/>
        </div>
    );
}

export default App;
