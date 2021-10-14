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

  function updateItem() {
    update(todo.id)
  }

  function removeItem() {
    remove(todo.id)
  }

  return (
    <div>
      {/*   FIXME  */}
      {todos.map(todo =>
        <div>
          <EditableTodo todo={todo} />
          <button onClick={updateItem}>Edit</button>
          <button onClick={removeItem}>Remove</button>
        </div>
      )}
    </div>
  );
}

export default EditableTodoList;
