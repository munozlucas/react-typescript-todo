import React from 'react'

import './TodoList.css'

type TodoListProps = {
  items: { id: string; text: string }[]
  onDeleteTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => onDeleteTodo(item.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
