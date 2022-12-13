import { createStore } from "redux";

const initialstate = { counter: 0, showCounter: true };

const counterReducer = (state = initialstate, action) => {
  if (action.type === "Increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter

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
      //Yinede showcounteri eklemen lazım değiştirmesende çünkü son görünümü veriyoruz
      showCounter: state.showCounter //bunu eklemezsen hang ttona basarsan bas sayaç kapatılır 
      // çünkü değer tanımsız olur ve bu false olarak değerlendirilir
      // böyle olmasının sebebi eski statenin üzerine yazıyor olmamız her şey yeni yazılan olur eski bilgiler gider
    };
  }

  if (action.type === "Decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === "Toggle") {
    return {
        showCounter: !state.showCounter,
        counter: state.counter
    };
  }


  return state;
};

const store = createStore(counterReducer);

export default store;
