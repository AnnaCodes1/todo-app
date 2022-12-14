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
//     term: '',
//     filter: 'all', // all, active, done
//   }

//   createTodoItem(label) {
//     return {
//       label,
//       id: this.maxId++,
//       important: false,
//       done: false,
//     }
//   }
//   deleteItem = id => {
//     this.setState(({ todoData }) => {
//       const idx = todoData.findIndex(el => el.id === id)
//       const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
//       return {
//         todoData: newArray,
//       }
//     })
//   }

//   addItem = text => {
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
//     const idx = arr.findIndex(el => el.id === id)
//     const oldItem = arr[idx]
//     const newItem = { ...oldItem, [propName]: !oldItem[propName] }
//     return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
//   }

//   onToggleDone = id => {
//     this.setState(({ todoData }) => {
//       return {
//         todoData: this.toggleProperty(todoData, id, 'done'),
//       }
//     })
//   }

//   onToggleImportant = id => {
//     this.setState(({ todoData }) => {
//       return {
//         todoData: this.toggleProperty(todoData, id, 'important'),
//       }
//     })
//   }

//   onSearchChange = term => {
//     this.setState({ term })
//   }

//   onFilterChange = filter => {
//     this.setState({filter})
//   }

//   search(items, term) {
//     if (term.length === 0) {
//       return items
//     }
//     return items.filter(item => {
//       return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
//     })
//   }

//   filter(items, filter) {
//     switch (filter) {
//       case 'all':
//         return items
//       case 'active':
//         return items.filter(item => !item.done)
//       case 'done':
//         return items.filter(item => item.done)
//       default:
//         return items
//     }
//   }

//   render() {
//     const { todoData, term, filter } = this.state
//     const visibleItems = this.filter(this.search(todoData, term), filter)

//     const doneCount = todoData.filter(el => el.done).length
//     const todoCount = todoData.length - doneCount

//     return (
//       <div className='todo-app'>
//         <AppHeader
//           toDo={todoCount}
//           done={doneCount}
//         />
//         <div className='top-panel d-flex'>
//           <SearchPanel onSearchChange={this.onSearchChange} />
//           <ItemStatusFilter
//            filter={filter}
//            onFilterChange={this.onFilterChange} />
//         </div>

//         {todoData.length ? (
//           <TodoList
//             todos={visibleItems}
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
//id
let maxId = 100
//new todo item frame
const createTodoItem = label => {
  return {
    label: label,
    id: maxId++,
    important: false,
    done: false,
  }
}

//displayed items on the page
const initialItems = [
  createTodoItem('Drink Coffee'),
  createTodoItem('Learn React'),
  createTodoItem('Make awesome app'),
]

const App = () => {
  //Created state for array of objects
  const [todoData, setTodoData] = useState(initialItems)
  const [term, setTerm] = useState('')
  const [button, setButton] = useState('all')

  const deleteItem = id => {
    const idx = todoData.findIndex(el => el.id === id)
    setTodoData([...todoData.slice(0, idx), ...todoData.slice(idx + 1)])
  }

  const addItem = text => {
    const newItem = createTodoItem(text)
    setTodoData([...todoData, newItem])
  }

  // Function for properties of each obj in array, f.e. Done and Important
  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id)
    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    setTodoData([...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)])
  }

  const onToggleDone = id => {
    toggleProperty(todoData, id, 'done')
  }

  const onToggleImportant = id => {
    toggleProperty(todoData, id, 'important')
  }

  //
  const onSearchChange = value => {
    setTerm(value)
  }

  const search = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  const onFilterChange = name => {
    setButton(name)
  }

  const filter = (items, button) => {
    switch (button) {
      case 'all':
        return items
      case 'active':
        return items.filter(item => !item.done)
      case 'done':
        return items.filter(item => item.done)
      default:
        return items
    }
  }

  const visibleItems = filter(search(todoData, term), button)

  // Displaying number of todos done and left
  const doneCount = todoData.filter(el => el.done).length
  const todoCount = todoData.length - doneCount

  return (
    <div className='todo-app'>
      <AppHeader
        toDo={todoCount}
        done={doneCount}
      />
      <div className='top-panel d-flex'>
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter
          filter={button}
          onFilterChange={onFilterChange}
        />
      </div>

      {todoData.length ? (
        <TodoList
          todos={visibleItems}
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
