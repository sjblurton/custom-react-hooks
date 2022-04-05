import { useState } from "react";
import { usePrevious } from "../hooks";

export const PreviousComponent = () => {
  const [value, setValue] = useState<undefined | number>();
  const previous = usePrevious(value);
  return (
    <div>
      <div>{`${value} - ${previous}`}</div>
      <button
        onClick={() => setValue((c) => (typeof c === "number" ? c + 1 : 1))}
      >
        increment
      </button>
    </div>
  );
};
