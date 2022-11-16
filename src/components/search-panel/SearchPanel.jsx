import React from "react"
import SortingButtons from '../sorting-buttons/SortingButtons'
import classes from './SearchPanel.module.css'

const SearchPanel = () => {
  return (
    <div className={classes.searchAndSort}>
      <input className="form-control"  placeholder='type to search' /> 
      <SortingButtons />
    </div>
  )
}

export default SearchPanel