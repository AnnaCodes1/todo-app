import React, { useState } from 'react'

import AppHeader from '../app-header/AppHeader'
import SearchPanel from '../search-panel/SearchPanel'
import TodoList from '../todo-list/TodoList'
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter'
import ItemAddForm from '../item-add-form/ItemAddForm'
import './App.css'

// class App extends React.Component {
//   maxId = 1

//   state = {
//     todoData: [
//       this.createTodoItem('Drink Coffee'),
//       this.createTodoItem('Make Awesome App'),
//       this.createTodoItem('Have a lunch'),
//     ],
//   }

//   createTodoItem(label) {
//     return {
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

//   toggleProperty(arr, id, propName) {
//     const idx = arr.findIndex((el) => el.id === id);
//     const oldItem = arr[idx]
//     const newItem = {...oldItem, [propName]: !oldItem[propName]};
//     return [
//       ...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)
//     ]
//   }

//   onToggleDone = (id) => {
//     this.setState(({ todoData }) => {
//       return {
//         todoData: this.toggleProperty(todoData, id, 'done')
//       }
//     })
//   }

//   onToggleImportant = (id) => {
//     this.setState(({ todoData }) => {
//       return {
//         todoData: this.toggleProperty(todoData, id, 'important')
//       }
//     })
//   }

//   render() {
//     const { todoData } = this.state
//     const doneCount = todoData.filter((el) => el.done).length
//     const todoCount = todoData.length - doneCount

//     return (
//       <div className="todo-app">
//         <AppHeader toDo={todoCount} done={doneCount} />
//         <div className="top-panel d-flex">
//           <SearchPanel />
//           <ItemStatusFilter />
//         </div>

//         {todoData.length ? (
//           <TodoList
//             todos={todoData}
//             onDeleted={this.deleteItem}
//             onToggleImportant={this.onToggleImportant}
//             onToggleDone={this.onToggleDone}
//           />
//         ) : (
//           <h2 style={{ textAlign: 'center', color: 'steelblue' }}>
//             Well done! No to-dos left!
//           </h2>
//         )}
//         <ItemAddForm onAdded={this.addItem} />
//       </div>
//     )
//   }
// }

// Functional Component
let maxId = 1

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
  const doneCount = todoData.filter((el) => el.done).length
  const todoCount = todoData.length - doneCount

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

  
  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    setTodoData([
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1),
    ])
  }

  const onToggleDone = (id) => {
   toggleProperty(todoData, id, 'done')
  }

  const onToggleImportant = (id) => {
    toggleProperty(todoData, id, 'important')
  }

  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
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
