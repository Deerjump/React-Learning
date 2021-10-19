export interface TodoData {
  text: string,
  complete: boolean
}

export interface TodoProps {
  todo: TodoData 
  toggleTodo: ToggleTodo
}

export type ToggleTodo = (todoToToggle: TodoData) => void

export interface TodoListProps {
  todos: TodoData[]
  toggleTodo: ToggleTodo
}

export interface TodoFormProps {
  clearCompleted: () => void
  addNewTodo: (text: string) => void
}

