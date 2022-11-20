import React, { useState } from 'react'

import AppHeader from '../app-header/AppHeader'
import SearchPanel from '../search-panel/SearchPanel'
import TodoList from '../todo-list/TodoList'
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter'

import './App.css'
import ItemAddForm from '../item-add-form/ItemAddForm'

// class App extends React.Component {
//   maxId = 1

//   state = {
//     todoData: [
//       this.createTodoItem('Drink Coffee'),
//       this.createTodoItem('Make Awesome App'),
//       this.createTodoItem('Have a lunch')
//     ],
//   }

//   createTodoItem(label) {
//     return{
//       label,
//       id: this.maxId++,
//       important: false,
//       done: false,
//     }
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

//   addItem = (text) => {
//     const newItem = this.createTodoItem(text)
//     // add element in array
//     this.setState(({ todoData }) => {
//       const newArray = [...todoData, newItem]
//       return {
//         todoData: newArray,
//       }
//     })
//   }

//   //when element became done or important:
//   onToggleDone =(id) => {
//     console.log('Toggle done:', id)
//   }

//   onToggleImportant =(id)=> {
//     console.log('Toggle important:', id)
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

//         <TodoList todos={todoData} onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone} />
//         <ItemAddForm onAdded={this.addItem} />
//       </div>
//     )
//   }
// }
let maxId = 1;

const createTodoItem = (label) => {
  return {
    label: label,
    id: maxId++,
    important: false,
    done: false,
  }
}

const initialItems = [
  createTodoItem('Drink Coffee'),
  createTodoItem('Learn React'),
  createTodoItem('Make awesome app'),
]

const App = () => {
  const [todoData, setTodoData] = useState(initialItems)

  const deleteItem = (id) => {
    //Find index of an item we want to delete

    const idx = todoData.findIndex((el) => el.id === id)
    // Return new array with every item from array but deleted one
    setTodoData([...todoData.slice(0, idx), ...todoData.slice(idx + 1)])
  }

  const addItem = (text) => {
    const newItem = createTodoItem(text)
    setTodoData([...todoData, newItem])
  }

  //when element became done or important:
  const onToggleDone = (id) => {
    console.log('Toggle done:', id)
  }

  const onToggleImportant = (id) => {
    console.log('Toggle important:', id)
  }

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      {todoData.length ? (
        <TodoList
          todos={todoData}
          onDeleted={deleteItem}
          onToggleDone={onToggleDone}
          onToggleImportant={onToggleImportant}
        />
      ) : (
        <h2 style={{ textAlign: 'center', color: 'steelblue' }}>
          Well done! No to-dos left!
        </h2>
      )}

      <ItemAddForm onAdded={addItem} />
    </div>
  )
}

export default App
