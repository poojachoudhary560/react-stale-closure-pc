import React from 'react';
import StaleClosure from './StaleClosure';
import StaleClosureFix from './StaleClosureFix';
import './style.css';

export default function App() {
  return (
    <div>
      <h4>Stale Closure JS </h4>
      <StaleClosure />
      <h4>Stale Closure JS Fix </h4>
      <StaleClosureFix />
    </div>
  );
}
