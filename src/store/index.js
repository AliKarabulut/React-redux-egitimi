import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "Increment") {
    return {
      counter: state.counter + 1,
    };
  }
  // Böyle yapmayacağız çünkü beklenene artış genelde sabit olmaz
  // Kullanıcı örneğin istediği kadar aynı ürünü sepete ekler
  // Bu yüzden dummy kod yazmıyoruz
  // if (action.type === 'Increaseby5'){
  //     return {
  //         counter: state.counter + 5
  //     }
  // }

  if (action.type === "Increase") {
    return {
      counter: state.counter + action.amount,
    };
  }

  if (action.type === "Decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
