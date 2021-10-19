import { ChangeEvent, FC, FormEvent, useState } from "react";
import { TodoFormProps } from "./type";

export const TodoForm:FC<TodoFormProps> = ({ addNewTodo, clearCompleted }) => {
  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addNewTodo(text)
    setText('');
  }

  return (<form>
    <input type="text" value='' onChange={handleChange}/>
    <button type='submit' onClick={handleSubmit}>Add Todo</button>
    <button type='button' onClick={clearCompleted}>Clear Completed</button>
  </form>)
}; 