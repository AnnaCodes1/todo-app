import React from 'react'
import ReactDOM from 'react-dom/client'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import TodoList from './components/TodoList'

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Learn React', important: false, id: 2 },
    { label: 'Build Awesome App', important: true, id: 3 },
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
