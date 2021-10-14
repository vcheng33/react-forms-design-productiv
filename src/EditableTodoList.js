import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  console.log("EditableTodoList", todos)
  //  why does putting the key prop here work?
  return (
    <div>
      {todos.map(todo =>
        <div key={todo.id}>
          <EditableTodo todo={todo} update={update} remove={remove} />
        </div>
      )}
    </div>
  );
}

export default EditableTodoList;
