import { useToggle } from "../hooks";

const ToggleComponent = () => {
  const [value, toggleValue] = useToggle();
  return (
    <div>
      <h1>ToggleComponent</h1>
      <button onClick={() => toggleValue()}>toggle {`${value}`}</button>
      <button onClick={() => toggleValue(false)}>set false</button>
      <button onClick={() => toggleValue(true)}>set true</button>
    </div>
  );
};

export default ToggleComponent;
