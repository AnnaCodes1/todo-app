import React from 'react'
import ReactDOM from 'react-dom/client'
import AppHeader from './components/app-header/AppHeader'
import SearchPanel from './components/search-panel/SearchPanel'
import TodoList from './components/todo-list/TodoList'
import AddTodo from './components/add-todo/AddTodo'
import './App.css'

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Learn React', important: false, id: 2 },
    { label: 'Build Awesome App', important: true, id: 3 },
  ]

  return (
    <div className="app">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
      <AddTodo />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
