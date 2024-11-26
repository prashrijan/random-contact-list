import React from "react";

function Counter({ count, setCount }) {
  function increaseCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button type="button" className="mt-4" onClick={increaseCount}>
        Increase Count
      </button>
    </div>
  );
}

export default Counter;
