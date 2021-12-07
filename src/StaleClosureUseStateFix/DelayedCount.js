import React, { useState } from 'react';

function DelayedCount() {
  const [count, setCount] = useState(0);

  function handleClickAsync() {
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 1000);
  }

  function handleClickSync() {
    setCount(count + 1);
  }

  return (
    <div>
      {count}
      <button onClick={handleClickAsync}>Increase Async</button>
      <button onClick={handleClickAsync}>Increase Sync</button>
    </div>
  );
}

export default DelayedCount;
