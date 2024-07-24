import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './store/counter.js';
import Header from './Components/Header/index.jsx'
import Footer from './Components/Footer/index.jsx';

function App() {

  // Pulls state via useSelector from counter.js in the intiial state
  const count = useSelector((state) => state.counter.count);
  const numberOfClicks = useSelector((state) => state.counter.numberOfClicks);

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
      <Header/>
      <h3>Current Count({numberOfClicks}): {count}</h3>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <Footer/>
    </>
  )
}

export default App
