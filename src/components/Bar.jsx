import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles.css';

function Bar({year, level, percent}) {
  return(
    <div className='graphItem'>
      <div>
        <h3>{year}</h3>
      </div>
      <div className='bar'>
        <style jsx>{`
        .bar {
          width: ${percent}%;
        }
      `}</style>
        <p className='label'>{level}"</p>
      </div>
    </div>
  );
}

Bar.propTypes = {
  year: PropTypes.number,
  level: PropTypes.number,
  percent: PropTypes.number
};

export default Bar;