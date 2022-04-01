import { useState } from "react";

const useToggle = (
  defaultValue?: boolean
): [boolean, (input?: boolean) => void] => {
  const [value, setValue] = useState(
    typeof defaultValue === "boolean" ? defaultValue : false
  );

  const toggleValue = (input?: boolean) => {
    setValue((currentValue) =>
      typeof input === "boolean" ? input : !currentValue
    );
  };
  return [value, toggleValue];
};

export default useToggle;
