import React from "react";
import { useArray } from "../hooks";

type Props = {};

export const ArrayComponent = (props: Props) => {
  const { array, set, clear, filter, push, remove, update } = useArray([
    1, 2, 3, 4, 5, 6, 7,
  ]);
  return (
    <div>
      <h2>{array.length > 0 ? array.join(", ") : "there is no array."}</h2>
      <button onClick={() => push(7)}>add 7</button>
      <button onClick={() => update(1, 9)}>change second element to 9</button>
      <button onClick={() => remove(1)}>remove second element</button>
      <button onClick={() => filter((n: number) => n < 3)}>
        filter out 4 or higher
      </button>
      <button onClick={clear}>clear</button>
      <button
        onClick={() => {
          set([7, 6, 5, 4, 3, 2, 1]);
        }}
      >
        set to 7, 6, 5, 4, 3, 2, 1
      </button>
    </div>
  );
};
