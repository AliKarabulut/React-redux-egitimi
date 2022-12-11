const redux = require("redux"); //bu şekilde içe aktarılıyor

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer); //Store yaratır

// console.log(store.getState())

const counterSubscriber = () => {
  const latestState = store.getState(); // güncellendikten sora en son state snapshot ını
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });