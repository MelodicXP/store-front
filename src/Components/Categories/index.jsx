'use strict';
import { useDispatch, useSelector } from 'react-redux';
import './Categories.scss';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SHOW_CATEGORY } from '../../store/categories/categoriesSlice'; // Import the action from categoriesSlice
import { SHOW_PRODUCTS_BY_CATEGORY } from '../../store/products/productsSlice'; // Import action from productsSlice

const Categories = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.categoriesSlice.activeCategory);

  const handleDisplayElectronics = () => {
    dispatch(SHOW_CATEGORY('ELECTRONICS')); // Dispatch the action with correct case
    dispatch(SHOW_PRODUCTS_BY_CATEGORY('ELECTRONICS'));
  };
  
  const handleDisplayFood = () => {
    dispatch(SHOW_CATEGORY('FOOD')); // Dispatch the action with correct case
    dispatch(SHOW_PRODUCTS_BY_CATEGORY('FOOD'));
  };

  return (
    <>
      <Typography variant="h5">Browse our Categories</Typography>
      <Box
        className="categories"
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderColor: 'divider',
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <Typography
          onClick={handleDisplayElectronics}
          sx={{
            cursor: 'pointer',
            color: 'blue',
            marginRight: '10px',
          }}
        >
          ELECTRONICS
        </Typography>

        <Divider orientation="vertical" flexItem />

        <Typography
          onClick={handleDisplayFood}
          sx={{
            cursor: 'pointer',
            color: 'blue',
            marginRight: '10px',
          }}
        >
          FOOD
        </Typography>
      </Box>

      {category && (
        <>
          <Typography className="category-description" variant="h3">{category.category}</Typography>
          <Typography className="category-description" variant="h4">{category.description}</Typography>
        </>
      )}
    </>
  );
};

export default Categories;
