import { useSelector, useDispatch} from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter);


  const incrementHandler = () => {
    dispatch({type: 'Increment'})
  }


  const decrementHandler = () => {
    dispatch({type: 'Decrement'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Azalt</button>
        <button onClick={incrementHandler}>Artır</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
