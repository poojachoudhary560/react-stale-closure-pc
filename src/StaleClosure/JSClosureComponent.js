import React, { useEffect } from 'react';

function createIncrement(incBy) {
  let value = 0;
  function increment() {
    value += incBy;
    console.log(value);
  }
  const message = `Increment result is ${value}`;
  function log() {
    console.log(message);
  }
  // here log is a stale closure as it has captured the outdated value
  return [increment, log];
}

const JSClosureComponent = (props) => {
  useEffect(() => {
    const [increment, log] = createIncrement(1);
    increment();
    increment();
    increment();
    log();
  }, []);
  return <></>;
};

export default JSClosureComponent;
