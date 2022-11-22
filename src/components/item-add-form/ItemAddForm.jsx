import React, { useState } from 'react'
import './item-add-form.css'

// class ItemAddForm extends React.Component {
//   state = {
//     input: '',
//   }

//   newInput = (e) => {
//     this.setInput((state) => {
//       return {
//         input: state.e.target.value,
//       }
//     })
//   }
//   render() {
//     const { onAdded } = this.props
//     const { input } = this.state
//     return (
//       <span className="add-form">
//         <input
//           value={input}
//           onChange={this.newInput}
//           type="text"
//           className="form-control search-input"
//           placeholder="Something else to do"
//         />
//         <button
//           type="button"
//           className="btn btn-outline-secondary"
//           onClick={() => onAdded(input)}>
//           Add
//         </button>
//       </span>
//     )
//   }
// }

const ItemAddForm = ({ onAdded }) => {
  const [input, setInput] = useState('')

  const newInput = (e) => {
    setInput(e.target.value);   
  }

  return (
    <span className="add-form">
      <input
        value={input}
        onChange={newInput}
        type="text"
        className="form-control search-input"
        placeholder="Something else to do"
      />
      <button type="button" className="btn btn-outline-secondary" onClick={()=>onAdded(input)}>
        Add
      </button>
    </span>
  )
}

export default ItemAddForm
