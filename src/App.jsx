import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './store/counter.js';

function App() {

  // Pulls state via useSelector from counter.js in the intiial state
  const count = useSelector((state) => state.counter.count);

  // Use to dispatch actions
  const dispatch = useDispatch();

  // On click dispatch action
  const handleDecrement = () => {
    dispatch(decrement(1));
  }

  // On click dispatch action
  const handleIncrement = () => {
    dispatch(increment(1));
  }
  
  return (
    <>
      <h1>Redux Counter</h1>
      <h3>Current Count: {count}</h3>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App
