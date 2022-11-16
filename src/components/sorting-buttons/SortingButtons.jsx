import React from 'react'
import './SortingButtons.css'

const SortingButtons = () => {
  return (
    <div className='sortingBtns'>
      <button type='button' className="btn btnInfo" >All</button>
      <button type='button' className="btn btn-outline-secondary btnActive">Active</button>
      <button type='button' className="btn btn-outline-secondary btnDone">Done</button>
    </div>
  )
}

export default SortingButtons