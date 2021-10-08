import React from "react";
import { TodoItems } from "../Components/TodoItems";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3 ">Todos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItems todo={todo} key={todo.sNo} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
