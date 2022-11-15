import React from 'react'
import './TodoListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'teal' : 'black',
  }

  return (
    <span className="todo-list-item" style={style}>
      {label}
    </span>
  )
}

export default TodoListItem
