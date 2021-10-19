import { FC } from 'react';
import { TodoProps } from './type';

export const TodoItem: FC<TodoProps> = ({ todo }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={() => {}}/>
        {todo.text}
      </label>
    </div>
  );
};
