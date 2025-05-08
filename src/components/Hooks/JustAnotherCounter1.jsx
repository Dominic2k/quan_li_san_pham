import { useState } from 'react';

function JustAnotherCounter() {
  const [count, setCount] = useState(0);
  
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Count Up To The Moon</button>
    </div>
  );
}

export default JustAnotherCounter;
