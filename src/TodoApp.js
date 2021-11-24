import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";


/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);
  console.log("todos:", todos);

  /** add a new todo to list */
  function create(newTodo) {
    let updatedNewToDo = { ...newTodo, id: uuid() };
    setTodos(curr => [...curr, updatedNewToDo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(curr => curr.map(
      todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(curr => curr.filter(
      todo => todo.id !== id
    ));
  }

  // the if condition for Editable and Top are the same so can combine
  return (
    <main className="TodoApp">
      <div className="row">

        {todos.length === 0 && <div className="col-md-6">
          <span className="text-muted">You have no to dos.</span>
        </div>}

        {todos.length > 0 &&
          <div className="col-md-6">
            <div className="row">
              <h3>To Dos</h3>
              <EditableTodoList todos={todos} update={update} remove={remove} />
            </div>
          </div>}

        <div className="col-md-6">
          <section className="row mb-4">
            <h3>Top To Do</h3>
            {todos.length > 0 && <TopTodo todos={todos} />}
            {todos.length === 0 && <p>No to dos yet!</p>}
          </section>
          <section className="row mb-4">
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>



      </div>
    </main>
  );
}

export default TodoApp;