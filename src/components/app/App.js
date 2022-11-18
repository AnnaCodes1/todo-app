import React, { useState } from 'react'

import AppHeader from '../app-header/AppHeader'
import SearchPanel from '../search-panel/SearchPanel'
import TodoList from '../todo-list/TodoList'
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter'

import './App.css'
import ItemAddForm from '../item-add-form/ItemAddForm'

// class App extends React.Component {
//   state = {
//     todoData: [
//       { label: 'Drink Coffee', id: 1 },
//       { label: 'Make Awesome App', id: 2 },
//       { label: 'Have a lunch', id: 3 },
//     ],
//   }

//   render() {
//     const { todoData } = this.state

//     return (
//       <div className="todo-app">
//         <AppHeader toDo={1} done={3} />
//         <div className="top-panel d-flex">
//           <SearchPanel />
//           <ItemStatusFilter />
//         </div>

//         <TodoList todos={todoData} onDeleted={(id) => console.log('del', id)} />
//         <ItemAddForm />
//       </div>
//     )
//   }
// }

const App = () => {

  const [todoData, setTodoData] = useState([
    { label: 'Drink Coffee', id: 1 },
    { label: 'Make Awesome App', id: 2 },
    { label: 'Have a lunch', id: 3 },
  ])

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} onDeleted={(id) => console.log('del', id)} />
      <ItemAddForm />
    </div>
  )
}


export default App
