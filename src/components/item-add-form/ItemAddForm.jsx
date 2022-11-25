import React, { useState } from 'react'
import './item-add-form.css'

// class ItemAddForm extends React.Component {
//   state = {
//     label: '',
//   }

//   onLabelChange = (e) => {
//     this.setState({
//       label: e.target.value,
//     })
//   }

//   onSubmit = (e) => {
//     e.preventDefault()
//     this.props.onAdded(this.state.label)
//     this.setState({
//       label: '',
//     })
//   }
//   render() {

//     return (
//       <form className="add-form" onSubmit={this.onSubmit}>
//         <input
//           value={this.state.label}
//           onChange={this.onLabelChange}
//           type="text"
//           className="form-control search-input"
//           placeholder="Something else to do"
//         />
//         <button type="submit" className="btn btn-outline-secondary">
//           Add
//         </button>
//       </form>
//     )
//   }
// }

const ItemAddForm = ({ onAdded }) => {
  const [label, setLabel] = useState('')

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onAdded(label)
    setLabel('')
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        value={label}
        onChange={onLabelChange}
        type="text"
        className="form-control search-input"
        placeholder="Something else to do"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Add
      </button>
    </form>
  )
}

export default ItemAddForm
