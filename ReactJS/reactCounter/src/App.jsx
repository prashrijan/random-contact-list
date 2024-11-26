import { useState } from "react";

import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default App;
