import React from "react";

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

  let display = () => {
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
      {display()}
      <button className="btn btn-danger btn-sm ml-2" onClick={()=>handleDeleteTodo(id)}>X</button>
    </div>
  );
}
