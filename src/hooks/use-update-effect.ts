import { useEffect, useRef } from "react";

export const useUpdateEffect = (callback: any, dependencies: any[]) => {
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies); // eslint-disable-line
};
