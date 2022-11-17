import React from 'react'

import AppHeader from '../app-header/AppHeader'
import SearchPanel from '../search-panel/SearchPanel'
import TodoList from '../todo-list/TodoList'
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter'

import './App.css'
import ItemAddForm from '../item-add-form/ItemAddForm'

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', id: 1 },
    { label: 'Make Awesome App', id: 2 },
    { label: 'Have a lunch', id: 3 },
  ]

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
      <ItemAddForm />
    </div>
  )
}
export default App
