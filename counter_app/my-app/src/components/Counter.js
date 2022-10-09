import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count :{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
