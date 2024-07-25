'use strict';

import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from './store/counter.js';

const handleDisplayElectronics = () => {
  console.log('Handle Display Electronics');
}

const handleDisplayFood = () => {
  console.log('Handle Display Food');
}

const Categories = () => {
  return (
    <div>
     <ul>
      <button onClick={handleDisplayElectronics}>Electronics</button>
      <button onClick={handleDisplayFood}>Food</button>
      <li>Electronics</li>
      <li>Food</li>
     </ul>
    </div>
  );
}

export default Categories;``