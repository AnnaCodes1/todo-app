import React, { useState } from 'react'

import './todo-list-item.css'

class TodoListItem extends React.Component {

  state = {
    done: false,
    important: false
  }


  //DELETE THIS ONCE USED SOMEWHERE ELSE:
  // onLabelClick = () => {
  //   this.setState((state) => {
  //     return {
  //       done: !state.done
  //     }
  //   })
  // }

  // onImportantClick = () => {
  //   this.setState((state) => {
  //     return {
  //       important: !state.important
  //     }
  //   })
  // }

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone} = this.props
    const {done, important} = this.state;

    let classNames = "todo-list-item";
    if(done) {
      classNames += ' done'
    }
    if(important) {
    classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label"
         onClick={onToggleDone}>
          {label}
        </span>
        <span>
          <button type="button" className="btn btn-outline-danger" onClick={onDeleted}>
            <i className="fa fa-trash-o"></i>
          </button>
          <button type="button" className="btn btn-outline-success " onClick={onToggleImportant}>
            <i className="fa fa-exclamation "></i>
          </button>
        </span>
      </span>
    )
  }
}

// const TodoListItem = ({ label, onDeleted }) => {
//   const [done, setDone] = useState(false)
//   const [important, setImportant] = useState(false)

//   const onLabelClick = () => {
//     setDone((done) => {
//       return !done
//     })
//   }

//   const onMarkImportant = () => {
//     setImportant((important => {
//       return !important
//     }))
//   }

//   let classNames = 'todo-list-item'
//   if (done) {
//     classNames += ' done'
//   }
//   if (important) {
//     classNames += ' important'
//   }

//   return (
//     <span className={classNames}>
//       <span className="todo-list-item-label" onClick={onLabelClick}>
//         {label}
//       </span>
//       <span>
//         <button type="button" className="btn btn-outline-danger" onCLick={onDeleted}>
//           <i className="fa fa-trash-o"></i>
//         </button>
//         <button
//           type="button"
//           className="btn btn-outline-success "
//           onClick={onMarkImportant}>
//           <i className="fa fa-exclamation "></i>
//         </button>
//       </span>
//     </span>
//   )
// }

export default TodoListItem
