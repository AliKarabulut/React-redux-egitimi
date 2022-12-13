import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); //ikinci counter yapı değiştiği yani obje içine aldığımız için
  // storede o yüzden ordaki tanımladığımız ismi kullandık
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "Increment" });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: "Increase", amount: 5 });
    // Peki amount olunca ne yapıyoruz
    // Değeri içine veriyoruz
    // Redux toolkit bizim için yapıyor
    // Önemli nokta
    //{type: SOME_UNIQUE_IDENTFIER, payload: 10}
    // varsayılan olarak payload olarak geçiyor o yüzden amountu unut
    //artık payload var :)
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    // dispatch({ type: "Decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "Toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Artır</button>
        <button onClick={increaseHandler}>5 Artır</button>
        <button onClick={decrementHandler}>Azalt</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>Azalt</button>
//           <button onClick={this.incrementHandler.bind(this)}>Artır</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // Bununla aynı işlevi görür ama class connect için böyle yapmak gerekiyor
// // const counter = useSelector((state) => state.counter)
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "Increment" }),
//     decrement: () => dispatch({ type: "Decrement" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
