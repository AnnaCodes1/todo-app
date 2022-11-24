import React, { useState } from 'react'

import './search-panel.css'

class SearchPanel extends React.Component {
  state = {
    term: '',
  }
  onSearchChange = (e) => {
    const term = e.target.value
    this.setState({ term })
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <form>
        <input
          value={this.state.term}
          onChange={this.onSearchChange}
          type="text"
          className="form-control search-input"
          placeholder="type to search"
        />
      </form>
    )
  }
}

// // Functional version
// const SearchPanel = ({ onSearchChange }) => {
//   const [term, setTerm] = useState('')

//   const onChange = (e) => {
//     const value = e.target.value
//     setTerm(value)
//     onSearchChange(value)
//   }

//   return (
//     <form>
//       <input
//         value={term}
//         onChange={onChange}
//         type="text"
//         className="form-control search-input"
//         placeholder="type to search"
//       />
//     </form>
//   )
// }

export default SearchPanel
