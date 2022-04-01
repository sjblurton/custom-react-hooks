import useToggle from "../hooks/use-toggle";

const ToggleComponent = () => {
  const [value, toggleValue] = useToggle();
  return (
    <div>
      <h1>ToggleComponent</h1>
      <button onClick={() => toggleValue()}>toggle</button>
      <button onClick={() => toggleValue(false)}>set false</button>
      <button onClick={() => toggleValue(true)}>set true</button>
    </div>
  );
};

export default ToggleComponent;
