import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles.css';

function Snowflake({left, duration, delay}) {
  return(
    <div className='snowflake'>
      <style jsx>{`
        div {
          left: ${left}px;
          animation-duration: ${duration}s;
          animation-delay: ${delay}s;
        }
      `}</style>
    </div>
  );
}

Snowflake.propTypes = {
  left: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number
};

export default Snowflake;