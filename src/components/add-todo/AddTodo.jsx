import React from 'react'
import './AddTodo.css'

const AddTodo = () => {
  return (
    <div className='add-todo'>
    <input className="form-control add-todo-input" placeholder='What needs to be done?' />
    <button className="btn btn-outline-secondary">Add</button>
    </div>
  )
}

export default AddTodo