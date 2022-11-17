import React from 'react'

import './todo-list-item.css'

class TodoListItem extends React.Component {

  state = {
    done: true
  }

  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`)
  }

  render() {
    const { label, important = false } = this.props
    const {done} = this.state;

    let classNames = "todo-list-item";
    if(done) {
      classNames += ' done'
    }

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" style={style}
         onClick={this.onLabelClick}>
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
}



// const TodoListItem = ({ label, important = false }) => {
//  const onLabelClick = () => {
//     console.log(`Done: ${label}`)
//   }
//   const style = {
//     color: important ? 'steelblue' : 'black',
//     fontWeight: important ? 'bold' : 'normal',
//   }

//   return (
//     <span className="todo-list-item">
//       <span
//         className="todo-list-item-label"
//         style={style}
//         onClick={onLabelClick}>
//         {label}
//       </span>
//       <span>
//         <button type="button" className="btn btn-outline-danger">
//           <i className="fa fa-trash-o"></i>
//         </button>
//         <button type="button" className="btn btn-outline-success ">
//           <i className="fa fa-exclamation "></i>
//         </button>
//       </span>
//     </span>
//   )
// }

export default TodoListItem
