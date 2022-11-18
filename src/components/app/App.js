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

//   deleteItem = (id) => {
//     this.setState(({ todoData }) => {
//       const idx = todoData.findIndex((el) => el.id === id)
//       const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
//       return {
//         todoData: newArray,
//       }
//     })
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

//         <TodoList todos={todoData} onDeleted={this.deleteItem} />
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

  const deleteItem = (id) => {
    //Find index of an item we want to delete

    const idx = todoData.findIndex((el) => el.id === id)
    // Return new array with every item from array but deleted one
    setTodoData([...todoData.slice(0, idx), ...todoData.slice(idx + 1)])
  }

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      {todoData.length ? (
        <TodoList todos={todoData} onDeleted={deleteItem} />
      ) : (
        <h2 style={{ textAlign: 'center', color: 'steelblue' }}>
          Well done! No to-dos left!
        </h2>
      )}

      <ItemAddForm />
    </div>
  )
}

export default App
