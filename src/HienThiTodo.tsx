import React from "react";
import Todo from "./Todo";

export default function HienThiTodo(props:any) {
  const {listTodos, handleDeleteTodo, handleChangeTaskStatus}= props
  return (
    <div>
      {listTodos.map((todo: any) => {
        return (
          <div>
            <Todo key={todo.id}
                  handleDeleteTodo={handleDeleteTodo} 
                  handleChangeTaskStatus={handleChangeTaskStatus}
                  {...todo}>
            </Todo>
            
          </div>
        );
      })}
    </div>
  );
}
