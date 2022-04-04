import { useAxios } from "../hooks";

type Props = {};

export const AxiosComponent = (props: Props) => {
  const { data, error, isValidating, mutate } = useAxios(
    "https://jsonplaceholder.typicode.com/todos"
  );
  if (!data && !error) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <button onClick={() => mutate()}>update</button>
      {isValidating && <div>updating data...</div>}
      {data && data.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};
