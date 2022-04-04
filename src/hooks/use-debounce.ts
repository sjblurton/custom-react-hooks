import { useEffect } from "react";
import { useTimeout } from "./";

export const useDebounce = (
  callback: any,
  delay: number,
  dependencies: any[]
) => {
  const { clear, reset } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []); //eslint-disable-line
};
