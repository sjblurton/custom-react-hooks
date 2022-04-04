import { useState } from "react";
import { useDebounce } from "../hooks";

type Props = {};

export const DebounceComponent = (props: Props) => {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};
