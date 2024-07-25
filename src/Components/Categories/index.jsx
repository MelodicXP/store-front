'use strict';
import { useDispatch, useSelector } from "react-redux";
import { showChosenCategory, showCategoryDescription } from "../../store/counter";

const Categories = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.counter.filteredCategory);

  const handleDisplayElectronics = () => {
    dispatch(showChosenCategory('ELECTRONICS'));
    dispatch(showCategoryDescription('ELECTRONICS'));
  }
  
  const handleDisplayFood = () => {
    dispatch(showChosenCategory('FOOD'));
    dispatch(showCategoryDescription('FOOD'));
  }

  return (
    <div>
      <p>Browse our Categories</p>
      <span 
        onClick={handleDisplayElectronics} 
        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', marginRight: '10px' }}
      >
        Electronics
      </span>
      <span 
        onClick={handleDisplayFood} 
        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
      >
        Food
      </span>
      {category && <h3>{category.category}</h3>}
      {category && <h4>{category.description}</h4>}

    </div>
  );
}

export default Categories;