import { useStoreState, useStoreActions } from "easy-peasy";

export const CounterTwo = () => {
  console.log("<CounterTwo/>");
  const counterTwoState = useStoreState((state) => state.counter2);
  const incValue = useStoreActions((actions) => actions.incCount2);
  const decValue = useStoreActions((actions) => actions.decCount2);
  function inc() {
    incValue();
  }

  function dec() {
    decValue();
  }

  return (
    <div>
      <div>CountTwo = {counterTwoState.value}</div>
      <div>
        <button onClick={inc}>Increment Counter 2 </button>
        <button onClick={dec}>Decrement Counter 2 </button>
      </div>
    </div>
  );
};
