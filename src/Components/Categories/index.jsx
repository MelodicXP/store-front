'use strict';

const Categories = () => {
  const handleDisplayElectronics = () => {
    console.log('Handle Display Electronics');
  }
  
  const handleDisplayFood = () => {
    console.log('Handle Display Food');
  }

  return (
    <div>
      <button onClick={handleDisplayElectronics}>Electronics</button>
      <button onClick={handleDisplayFood}>Food</button>
    </div>
  );
}

export default Categories;