import { FC } from 'react';
import { TodoItem } from './Todo';
import { TodoListProps } from './type';

export const TodoList: FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} toggleTodo={toggleTodo}/>
      ))}
    </div>
  );
};
