import React from 'react'

const SortingButtons = () => {
  return (
    <div className='sorting-btns'>
      <button className="btn btn-outline-secondary all-btn app-btn">All</button>
      <button className="btn btn-outline-secondary active-btn app-btn">Active</button>
      <button className="btn btn-outline-secondary done-btn app-btn">Done</button>
    </div>
  )
}

export default SortingButtons