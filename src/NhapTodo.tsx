import React, { useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default function NhapTodo({listTodos, setListTodos}: any) {
    const[todo, setTodo]= useState({
        id : uuidv4(),
        text:'',
        done: false
    })
    const [text, setText] = useState('')

    const handleKeyDown = (event:any) => {
      if (event.key === 'Enter') {
        handleAdd()
      }
    }
    const handleAdd = () =>{
      if(text.trim()){
        setListTodos([...listTodos,todo])
        setTodo({id : uuidv4(),
        text:'',
        done: false})
        setText('')
      }
    }
    return (
    <div>
      <input  type="text" value={text} placeholder="Nhập những việc cần làm..."
             onKeyDown={handleKeyDown}   
             onChange={event => {
               setText(event.target.value)
               setTodo({...todo, text:event.target.value})}}/>
      <button className="ml-2 btn btn-primary" onClick={()=>handleAdd()}>Add</button>
    </div>
  );
}
