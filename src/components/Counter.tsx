import { useState } from 'react';
import c from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button className={c.button}onClick={() => setCount(prev => prev += 1)}>INC</button>
    </div>
  );
};