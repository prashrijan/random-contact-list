import "./index.css";
import { useState } from "react";

function App() {
  function handleClick() {
    console.log(inputValue);
    setInputValue("");
  }

  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="bg-slate-800 h-screen w-full flex items-center justify-center flex-col">
        <h1 className="text-white text-5xl">Prashrijan's Google</h1>
        <div className="flex gap-7 mt-11">
          <input
            type="text"
            class="rounded-3xl outline-none border-none py-4 px-7 w-96 shadow-2xl text-lg"
            placeholder="Search for something"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="rounded-3xl bg-purple-400 py-4 px-7 text-lg shadow-2xl"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
