import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './store/counter.js';

function App() {

  // Pulls state via useSelector from counter.js in the intiial state
  const count = useSelector((state) => state.count);
  
  return (
    <>
      <h1>Redux Counter</h1>
    </>
  )
}

export default App
