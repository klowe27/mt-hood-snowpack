import React from 'react';
import Snowflake from './Snowflake';
import {v4} from 'uuid';

function Snow() {
  function randomNumber(min, max) {
    return Math.floor(Math.random()*max+min);
  }

  function generateSnow(){
    let snow = [];
    for (let i=0; i < 300; i++) {
      let newLeft = randomNumber(1, window.innerWidth);
      let newDuration = randomNumber(10, 30);
      let newDelay = randomNumber(1, 30)
      snow.push({left: newLeft, duration: newDuration, delay: newDelay});
    }
    return snow;
  }

  return (
    <div>
      {generateSnow().map((snow) =>
        <Snowflake
          left={snow.left}
          duration={snow.duration}
          delay={snow.delay}
          key={v4()}/>
      )}
    </div>
  );
}

export default Snow;
