import { useStoreState, useStoreActions } from "easy-peasy";

export const CounterOne = () => {
  console.log("<CounterOne/>");
  const counterOneState = useStoreState((state) => state.counter1);
  const incValue = useStoreActions((actions) => actions.incCount1);
  const decValue = useStoreActions((actions) => actions.decCount1);

  function inc() {
    incValue();
  }

  function dec() {
    decValue();
  }

  return (
    <div>
      <div>CountOne = {counterOneState.value}</div>
      <div>
        <button onClick={inc}>Increment Counter 1 </button>
        <button onClick={dec}>Decrement Counter 1 </button>
      </div>
    </div>
  );
};
