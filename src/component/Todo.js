import React from "react";
import { Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ todo, handleDelete }) {
  return (
    <div className="d-flex justify-content-center">
        <Button
      className="mb-1"
      variant="contained"
      onClick={()=>handleDelete(todo.id)}
    >
      {todo.name}
    </Button>
    </div>
  );
}

export default Todo;
