import React from 'react'
import ReactDOM from 'react-dom/client'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import TodoList from './components/TodoList'

const App = () => {

  const todoData = [
    {label: "Drink Coffee", important:false },
    {label: "Learn React", important:false },
    {label: "Build Awesome App", important:true }
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos = {todoData} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
