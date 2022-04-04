import { useState } from "react";
import { useUpdateEffect } from "../hooks";

export const UpdateEffectComponent = () => {
  const [count, setCount] = useState(10);
  useUpdateEffect(alert(count), [count]);
  return (
    <div>
      <h1>UpdateEffectComponent</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};
