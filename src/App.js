import React from 'react';
import StaleClosure from './StaleClosure';
import StaleClosureFix from './StaleClosureFix';
import StaleClosureUseEffect from './StaleClosureUseEffect';
import StaleClosureUseEffectFix from './StaleClosureUseEffectFix';
import StaleClosureUseState from './StaleClosureUseState';
import './style.css';

export default function App() {
  return (
    <div>
      <h4>Stale Closure JS </h4>
      <StaleClosure />
      <h4>Stale Closure JS Fix </h4>
      <StaleClosureFix />
      <h4>Stale Closure useEffect</h4>
      <StaleClosureUseEffect />
      <h4>Stale Closure useEffect Fix</h4>
      <StaleClosureUseEffectFix />
      <h4>Stale Closure useState</h4>
      <StaleClosureUseState />
    </div>
  );
}
