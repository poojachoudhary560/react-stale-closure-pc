import React, { useState } from 'react';

function DelayedCount() {
  const [count, setCount] = useState(0);
  function handleClickAsync() {
    setTimeout(function delay() {
      setCount(count + 1);
    }, 1000);
  }
  return (
    <div>
      {count}
      <button onClick={handleClickAsync}>Increase async</button>
    </div>
  );
}

export default DelayedCount;
