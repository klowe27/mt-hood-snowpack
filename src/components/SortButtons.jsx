import React from 'react';
import PropTypes from 'prop-types'

function SortButtons({sortByYear, sortByLevel, sortedByYear}) {
  if (sortedByYear) {
    return (
      <div className='sortButtons'>
        <button onClick={sortByLevel}>Sort By Value</button>
      </div>
    )
  } else {
    return(
      <div className='sortButtons'>
        <button onClick={sortByYear}>Sort By Year</button>
      </div>
    )
  }
}

SortButtons.propTypes = {
  sortByYear: PropTypes.func,
  sortByLevel: PropTypes.func,
  sortedByYear: PropTypes.boolean
}

export default SortButtons;
