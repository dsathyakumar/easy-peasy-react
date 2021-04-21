import { useStoreState } from "easy-peasy";

export const DisplayTwo = () => {
  console.log("<Displaytwo/>");
  const counterTwoState = useStoreState((state) => state.counter2);
  return <div>{counterTwoState.value}</div>;
};
