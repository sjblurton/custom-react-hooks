import isEqual from "lodash/fp/isEqual";
import { useEffect, useRef } from "react";

export const useDeepCompareEffect = (
  callback: () => void,
  dependencies: any[]
) => {
  const currentDependenciesRef = useRef<any[]>([]);

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current]); //eslint-disable-line
};
