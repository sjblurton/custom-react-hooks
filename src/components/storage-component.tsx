import { useLocalStorage, useSessionStorage } from "../hooks";

export const StorageComponent = () => {
  const [name, setName, removeName] = useSessionStorage("name", "simon");
  const [age, setAge, removeAge] = useLocalStorage("age", "40");
  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => setAge((c) => (c ? (Number(c) + 1).toString() : "40"))}
      >
        make older
      </button>
      <button
        onClick={() => setAge((c) => (c ? (Number(c) - 1).toString() : "40"))}
      >
        make younger
      </button>
      <button onClick={() => removeAge()}>remove age</button>
      <button onClick={() => removeName()}>remove name</button>
    </div>
  );
};
