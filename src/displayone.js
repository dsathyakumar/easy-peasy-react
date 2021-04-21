import { useStoreState } from "easy-peasy";

export const DisplayOne = () => {
  console.log("<Displayone/>");
  const counterOneState = useStoreState((state) => state.counter1);
  return <div>{counterOneState.value}</div>;
};
