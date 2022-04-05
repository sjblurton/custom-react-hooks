import { useStateWithHistory } from "../hooks";

export const StateWithHistory = () => {
  const [count, setCount, { back, forward, go, history, pointer }] =
    useStateWithHistory(3);

  return (
    <div>
      <div>{count}</div>
      <div>{history.join(", ")}</div>
      <div>pointer - {pointer}</div>
      <button onClick={() => setCount(count * 2)}>double</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={back}>back</button>
      <button onClick={forward}>forward</button>
      <button onClick={() => go(2)}>go to position 2</button>
    </div>
  );
};
