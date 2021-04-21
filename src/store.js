import { createStore, action } from "easy-peasy";

export const store = createStore({
  counter1: {
    value: 0
  },
  counter2: {
    value: 0
  },
  incCount1: action((state, payload) => {
    state.counter1.value = state.counter1.value + 1;
  }),
  decCount1: action((state, payload) => {
    state.counter1.value = state.counter1.value - 1;
  }),
  incCount2: action((state, payload) => {
    state.counter2.value = state.counter2.value + 1;
  }),
  decCount2: action((state, payload) => {
    state.counter2.value = state.counter2.value - 1;
  })
});
