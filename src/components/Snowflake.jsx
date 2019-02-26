import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles.css';

function Snowflake({left, duration, delay, size}) {
  return(
    <div className='snowflake'>
      <style jsx>{`
        div {
          left: ${left}px;
          animation-duration: ${duration}s;
          animation-delay: ${delay}s;
          width: ${size}px;
          height: ${size}px;
        }
      `}</style>
    </div>
  );
}

Snowflake.propTypes = {
  left: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  size: PropTypes.number
};

export default Snowflake;