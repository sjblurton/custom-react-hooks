import { useState } from "react";
import { useTimeout } from "../hooks";

export const TimeoutComponent = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>clear timeout</button>
      <button onClick={reset}>reset timeout</button>
    </div>
  );
};
