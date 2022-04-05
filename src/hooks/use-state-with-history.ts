import { useCallback, useRef, useState } from "react";

export const useStateWithHistory = <T>(
  defaultValue: T,
  capacity = 10
): [
  value: T,
  setValue: (v: T) => void,
  functions: {
    history: T[];
    pointer: number;
    go: (index: number) => void;
    forward: () => void;
    back: () => void;
  }
] => {
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback(
    (v: T) => {
      const resolvedValue: T = typeof v === "function" ? v(value) : v;
      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        historyRef.current.splice(pointerRef.current + 1);

        historyRef.current.push(resolvedValue);

        while (historyRef.current.length > capacity) historyRef.current.shift();

        pointerRef.current = historyRef.current.length - 1;

        setValue(resolvedValue);
      }
    },
    [capacity, value]
  );

  const back = useCallback(() => {
    if (pointerRef.current <= 0) return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const go = useCallback((index: number) => {
    if (index < 0 || index >= historyRef.current.length - 1) return;
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      go,
      forward,
      back,
    },
  ];
};
