import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
  }

  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>
      <button type="button" className="btn btn-outline-success btn-sm">
        <i className="fa fa-exlamation"></i>
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm">
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  )
}

export default TodoListItem
