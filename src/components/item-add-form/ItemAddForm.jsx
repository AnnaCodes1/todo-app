import React, { useState } from 'react'
import './item-add-form.css'

class ItemAddForm extends React.Component {
  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onAdded(this.state.label)
    this.setState({
      label: '',
    })
  }
  render() {
    const {label} = this.state
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          value={label}
          onChange={this.onLabelChange}
          type="text"
          className="form-control search-input"
          placeholder="Something else to do"
        />
        <button type="button" className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    )
  }
}

// const ItemAddForm = ({ onAdded }) => {
//   const [label, setInput] = useState('')

//   const onLabelChange = (e) => {
//     setInput(e.target.value)
//   }

//   const onSubmit = (e) => {
//     e.preventDefault()
//     onAdded(label)
//     setInput('')
//   }
//   return (
//     <form className="add-form" onSubmit={onSubmit}>
//       <input
//         value={label}
//         onChange={onLabelChange}
//         type="text"
//         className="form-control search-input"
//         placeholder="Something else to do"
//       />
//       <button type="button" className="btn btn-outline-secondary">
//         Add
//       </button>
//     </form>
//   )
// }

export default ItemAddForm
