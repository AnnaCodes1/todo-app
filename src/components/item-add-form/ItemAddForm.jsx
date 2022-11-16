import React from 'react'
import './item-add-form.css'

const ItemAddForm = () => {
  return (
   <span className='add-form'>
     <input type="text"
              className="form-control search-input"
              placeholder="Something else to do" />
              <button type='button' className='btn btn-outline-secondary'>Add</button>
   </span>
  );
}

export default ItemAddForm