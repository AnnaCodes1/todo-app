import React, { useState } from 'react'

import './todo-list-item.css'

// class TodoListItem extends React.Component {

//   state = {
//     done: false
//   }

//   onLabelClick = () => {
//     this.setState({
//       done: true
//     })
//   }

//   render() {
//     const { label, important = false } = this.props
//     const {done} = this.state;

//     let classNames = "todo-list-item";
//     if(done) {
//       classNames += ' done'
//     }

//     const style = {
//       color: important ? 'steelblue' : 'black',
//       fontWeight: important ? 'bold' : 'normal',
//     }

//     return (
//       <span className={classNames}>
//         <span className="todo-list-item-label" style={style}
//          onClick={this.onLabelClick}>
//           {label}
//         </span>
//         <span>
//           <button type="button" className="btn btn-outline-danger">
//             <i className="fa fa-trash-o"></i>
//           </button>
//           <button type="button" className="btn btn-outline-success ">
//             <i className="fa fa-exclamation "></i>
//           </button>
//         </span>
//       </span>
//     )
//   }
// }

const TodoListItem = ({ label, important = false }) => {
  
  const [done, setDone] = useState(false)
  const onLabelClick = () => {
    setDone(true)
  }

  let classNames = 'todo-list-item'
  if (done) {
    classNames += ' done'
  }

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
  }

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        style={style}
        onClick={onLabelClick}>
        {label}
      </span>
      <span>
        <button type="button" className="btn btn-outline-danger">
          <i className="fa fa-trash-o"></i>
        </button>
        <button type="button" className="btn btn-outline-success ">
          <i className="fa fa-exclamation "></i>
        </button>
      </span>
    </span>
  )
}

export default TodoListItem
