import React, { useEffect } from 'react';
function createIncrement(incBy) {
  let value = 0;
  function increment() {
    value += incBy;
    console.log('Fixed ', value);
  }
  function log() {
    const message = `Fixed closure log: value ${value}`;
    console.log(message);
  }
  return [increment, log];
}

const JSClosureComponent = () => {
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
