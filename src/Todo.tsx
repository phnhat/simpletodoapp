import React, { useState } from "react";

type Todo = {
  id: string;
  text: string;
  done: boolean;
};
export default function Todo(props:any) {
  const {id, text, done , handleDeleteTodo, handleChangeTaskStatus}= props
  const todo = {
    id: id,
    text: text,
    done: done,
  };
  
  function Toggletodo() {
    handleChangeTaskStatus(id)
  }

  let display = (todo: Todo) => {
    if (done) {
      return (
        <span
          style={{ textDecoration: "line-through" , cursor: "pointer"}}
          onClick={()=>Toggletodo()}>
          {todo.text}
        </span>
      );
    }
    return (
      <span style={{cursor: "pointer"}} onClick={()=>Toggletodo()}>{todo.text}</span>    
    );
  };
  return (
    <div className="mt-2">
      {display(todo)}
      <button className="btn btn-danger btn-sm ml-2" onClick={()=>handleDeleteTodo(id)}>X</button>
    </div>
  );
}
