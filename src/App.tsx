import React, { useState } from "react";
import "./App.css";
import NhapTodo from "./NhapTodo";
import HienThiTodo from "./HienThiTodo";

function App() {
  type Todo = {
    id: string;
    text: string;
    done: boolean;
  };
  const [listTodos, setListTodos] = useState<Todo[]>([]);
  console.log(listTodos);
  const handleDeleteTodo = (id: string) =>{
    setListTodos(listTodos.filter((todo) => todo.id !== id));
  }
  const handleChangeTaskStatus = (id: string) => {
    const nextState = listTodos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setListTodos(nextState);
  };
  const handleDeleteAllTasks = () => {
    setListTodos([]);
  };
  const completeAllTasks = () => {
    setListTodos(
      listTodos.map(function (todo) {
        return { ...todo, done: true };
      })
    );
  };
  return (
    <div className="d-flex justify-content-center ">
      <div className="container row mt-5">
        <div className="col-sm-6">
          <h1>Nhập Todo</h1>
          <NhapTodo setListTodos={setListTodos} listTodos={listTodos} />
          <div>
            <button className="btn btn-success mt-3" onClick={completeAllTasks}>
              Complete All Tasks
            </button> <br/>
            <button className="btn btn-danger mt-3" onClick={handleDeleteAllTasks}>
              Delete All Tasks
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <h1>Danh sách Todo</h1>
          <HienThiTodo
            listTodos={listTodos}
            handleDeleteTodo={handleDeleteTodo}
            handleChangeTaskStatus={handleChangeTaskStatus}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
