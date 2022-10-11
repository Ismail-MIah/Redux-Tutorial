import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementCounter());
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

// state -count : 0
// action -increment, decrement, reset
// reducers - increment -> count => count + 1
//             decrement -> count => count - 1
//             reset -> count => 0
// store
// providing store in react
// use store
