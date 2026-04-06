import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task : "sample task" , id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        console.log("Have to add new Task");
        setTodos( (prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4()}];
        } );
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteToDo = (id) => {

        setTodos((prevTodos) => {todos.filter((prevTodos) => prevTodos.id != id)});
        // console.log(copy);
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => (prevTodos.map((todo) => {
            return {
                ...todo,
                task : todo.task.toUpperCase()
            }
        })))
        
    }

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => (prevTodos.map((todo) => {

            if(todo.id === id){
                return {
                    ...todo,
                    task : todo.task.toUpperCase()
                }
            } else {
                return todo;
            }

            
        })))
    }

    return ( 
        <div>
            <input placeholder="Add task" value={newTodo} onChange={updateTodoValue}/> <br />
            <button onClick={addNewTask}>Add</button>
            <br /><br /><br /><br />
            <hr />
            <h4>Tasks ToDo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id} >
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
                            &nbsp;
                            <button onClick={() => upperCaseOne(todo.id)}>Uppercase One</button>
        
                        </li>
                    ))
                }
            </ul>
            <br />
            <button onClick={upperCaseAll}>Uppercase All</button><br />
        </div>
    );

}