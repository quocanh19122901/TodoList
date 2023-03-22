import React from "react";
import Todo from "./Todo";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList({ todoList,handleDelete }) {
  return (
    <div className="d-flex flex-column justify-content-center text-center">
      {todoList.map((todo) => (
        <Todo key={todo.id} handleDelete={handleDelete} todo={todo} />
      ))}
      
    </div>
  );
}

export default TodoList;
