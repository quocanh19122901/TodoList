import React, { useCallback, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { v4 } from "uuid";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./component/TodoList";

function App() {
  const [Input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleInput = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  const handleAddbutton = useCallback(
    (e) => {
      setTodoList([
        ...todoList,
        {
          id: v4(),
          name: Input,
        },
      ]);
      setInput("");
    },
    [todoList, Input]
  );
  const handleDelete = useCallback((id) => {
    setTodoList((prevList) => prevList.filter((item) => item.id !== id));
    
  }, []);

  return (
    <div className="d-flex justify-content-center align-center flex-column p-3 ">
      <Typography className="text-center">To do list</Typography>
      <div className="d-flex justify-content-center pt-3 pb-3 ">
        <TextField
          className=""
          id="outlined-basic"
          label="To do list"
          variant="outlined"
          value={Input}
          onChange={handleInput}
        />
        <Button
          variant="contained"
          disabled={!Input}
          href="#contained-buttons"
          onClick={handleAddbutton}
        >
          Add
        </Button>
      </div>
      <TodoList className="" todoList={todoList} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
