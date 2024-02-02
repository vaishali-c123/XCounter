import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {value} </p>
      <button
        onClick={() => {
          setValue((prev) => {
            return prev + 1;
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setValue((prev) => {
            return prev - 1;
          });
        }}
      >
        Decrement
      </button>
    </div>
  );
}