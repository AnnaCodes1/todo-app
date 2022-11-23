import React from 'react'

import './item-status-filter.css'

export default class ItemStatusFilter extends React.Component {


  render() {    

    return (
      <div className="btn-group">
        <button type="button" className={'btn btn-outline-secondary'} >
          All
        </button>
        <button type="button" className={'btn btn-outline-secondary'} >
          Active
        </button>
        <button type="button" className={'btn btn-outline-secondary'} >
          Done
        </button>
      </div>
    )
  }
}
// btn-info
// btn-outline-secondary

// const ItemStatusFilter = () => {
//   return (
//     <div className="btn-group">
//       <button type="button"
//               className="btn btn-info">All</button>
//       <button type="button"
//               className="btn btn-outline-secondary">Active</button>
//       <button type="button"
//               className="btn btn-outline-secondary">Done</button>
//     </div>
//   );
// };

// export default ItemStatusFilter
