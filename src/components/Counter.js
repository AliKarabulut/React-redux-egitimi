import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "Increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "Increase", amount: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "Decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "Toggle" });
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
