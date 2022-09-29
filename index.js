// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD-USER";

//state
const initialCounterState = {
  count: 0,
};
const initialUsersState = {
  users: [{ name: "anisul islam" }],
};

//action

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const addUser = (usr) => {
  return {
    type: ADD_USER,
    payload: { name: "shakil" },
  };
};
