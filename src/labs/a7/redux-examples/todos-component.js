import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from './reducers/todos-reducer'

const Todos = () => {

  // we use array to store todos, so that it's deconstruct it already 
  // no deconstruct to use {todos}
  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState({do: ""}); 

  // type new todo info
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;   // retrieve input value 
    const newTodo = {do: doValue};        // create a new todo
    setTodo(newTodo);                     // update todos
  }

  // use dispatch to add new todo to todos
  const dispatch = useDispatch();
  const createTodoClickHandler = () => {
    dispatch(addTodo(todo))
  } 

  const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(todo))
  } 

  const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo))
  }
 


 return(
   <>
     <h3>Todos</h3>
     <ul className="list-group">

         {/* add a input file */} 
        <li className="list-group-item">
            <button onClick={createTodoClickHandler}
                    className="btn btn-primary w-25 float-end">
                    Create
            </button>
            <input
              onChange={todoChangeHandler}
              value={todo.do}
              className="form-control w-75"/>
        </li>

       {
         todos.map(todo =>
           <li key = {todo._id} className="list-group-item">
              {/* delete button */}
              <button onClick={() => 
                  deleteTodoClickHandler(todo._id)}
                  className="btn btn-danger float-end ms-2">
                  Delete
              </button>

              {/* checkbox */}
              <input type="checkbox"
                    checked={todo.done}
                    onChange={() => 
                    toggleTodoDone(todo)}
                    className="me-2"/>

              {todo.do}
           </li>
         )
       }
     </ul>
   </>
 );
};

export default Todos; 
