import React, { useState, useEffect } from 'react';

const WatchCount = (props) => {
  const [count, setCount] = useState(0);
  useEffect(
    function () {
      /* const id = setInterval(function log() {
        console.log(`Value of count fix is ${count}`);
      }, 3000);
      return function () {
        clearInterval(id);
      }; */
    },
    [count]
  );

  return (
    <>
      {count} <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default WatchCount;
