import React, { useState, useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
      break;
    case "minus":
      return { count: state.count - 1 };
      break;
    default:
      throw new Error();
  }
}
function Count() {
  const [state, dispatch] = useReducer(reducer, { count: 3 });
  const text = useRef(null);
  const test = () => console.log(text);
  return (
    <>
      <input ref={text} type="text" placeholder="name" onChange={test} />
      <p>Count : {state.count}</p>
      <button onClick={() => dispatch({ type: "add" })}>add</button>
    </>
  );
}

export default Count;
