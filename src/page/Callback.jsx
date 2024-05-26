import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click me</button>;
});
function Callback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <>
      <Child onClick={handleClick}></Child>
      <p>counter {count}</p>
    </>
  );
}

export default Callback;
