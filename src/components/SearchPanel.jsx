import React from "react"
import SortingButtons from "./SortingButtons"

const SearchPanel = () => {
  return (
    <div className="search-and-sort">
      <input className="form-control"  placeholder='type to search' /> 
      <SortingButtons />
    </div>
  )
}

export default SearchPanel