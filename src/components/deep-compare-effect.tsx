import { useRef, useState } from "react";
import { useDeepCompareEffect } from "../hooks";

export const DeepCompareEffect = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("simon");
  const [list, setList] = useState(["simon", "bob", "foo", "bar", "goo"]);
  const count = useRef(0);

  const person = { age, name };

  useDeepCompareEffect(() => {
    count.current = count.current + 1;
  }, [person]);

  return (
    <div>
      <div>Rerendered Number: {count.current}</div>
      <div>{list.join(", ")}</div>
      <div>{`name: ${person.name}, age: ${person.age}`}</div>
      <button onClick={() => setAge((c) => c + 1)}>Increment age</button>
      <button onClick={() => setList((c) => list.reverse())}>
        reverse list
      </button>
      <button
        onClick={() => setName(list[Math.floor(Math.random() * list.length)])}
      >
        change name
      </button>
    </div>
  );
};
