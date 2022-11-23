import React, { useState } from 'react'

import './todo-list-item.css'

const TodoListItem = ({ label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {
  
  let classNames = 'todo-list-item'
  if (done) {
    classNames += ' done'
  }
  if (important) {
    classNames += ' important'
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label} 
      </span>
      <span>
        <button type="button" className="btn btn-outline-danger" onClick={onDeleted}>
          <i className="fa fa-trash-o"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-success "
          onClick={onToggleImportant}>
          <i className="fa fa-exclamation "></i>
        </button>
      </span>
    </span>
  )
}

export default TodoListItem
