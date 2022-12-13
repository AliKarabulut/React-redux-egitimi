// import { createStore } from "redux";
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialstate = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialstate,
  //modern js de sadece initialstate yazsan da yeter js kendi üstteki hale genişletir
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      //burda amount değeri aldığımız için action da olmalı ama ilk ikisinde
      //action kullanmadığımız için gerek yoktu
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }

  }
})

// const counterReducer = (state = initialstate, action) => {
//   if (action.type === "Increment") {
//     //state.counter++ burda manipüle edemezsin redux sıkıntı çıkartır
//     //ilerleyen zamanlarda ama toolkit ile yapabilirsin o izin verir
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter

//     };
//   }
//   // Böyle yapmayacağız çünkü beklenene artış genelde sabit olmaz
//   // Kullanıcı örneğin istediği kadar aynı ürünü sepete ekler
//   // Bu yüzden dummy kod yazmıyoruz
//   // if (action.type === 'Increaseby5'){
//   //     return {
//   //         counter: state.counter + 5
//   //     }
//   // }

//   if (action.type === "Increase") {
//     return {
//       counter: state.counter + action.amount,
//       //Yinede showcounteri eklemen lazım değiştirmesende çünkü son görünümü veriyoruz
//       showCounter: state.showCounter //bunu eklemezsen hang ttona basarsan bas sayaç kapatılır 
//       // çünkü değer tanımsız olur ve bu false olarak değerlendirilir
//       // böyle olmasının sebebi eski statenin üzerine yazıyor olmamız her şey yeni yazılan olur eski bilgiler gider
//     };
//   }

//   if (action.type === "Decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === "Toggle") {
//     return {
//         showCounter: !state.showCounter,
//         counter: state.counter
//     };
//   }


//   return state;
// };



const store = configureStore({
  // tek bi reducer da böyle yazılır ama birden çoksa reducer: counterSlice.reducer 
  // ama burda kullanmayacaz çünkü zaten bi tane reducerımız var reducer: { counter: counterSlice.reducer}
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions
export default store;
