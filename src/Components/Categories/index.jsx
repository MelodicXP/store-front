'use strict';
import { useDispatch } from "react-redux";
import { showChosenCategory } from "../../store/counter";

const Categories = () => {

  const dispatch = useDispatch();

  const handleDisplayElectronics = () => {
    dispatch(showChosenCategory('ELECTRONICS'));
  }
  
  const handleDisplayFood = () => {
    dispatch(showChosenCategory('FOOD'));
  }

  return (
    <div>
      <button onClick={handleDisplayElectronics}>Electronics</button>
      <button onClick={handleDisplayFood}>Food</button>
    </div>
  );
}

export default Categories;