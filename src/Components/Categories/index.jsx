'use strict';
import { useDispatch, useSelector } from "react-redux";
import { showCategory } from "../../store/actions";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Categories.scss';

const Categories = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.categories.activeCategory);

  const handleDisplayElectronics = () => {
    dispatch(showCategory('ELECTRONICS'));
  }
  
  const handleDisplayFood = () => {
    dispatch(showCategory('FOOD'));
  }

  return (
    <>
      <Typography variant="h5">Browse our Categories</Typography>
      <Box 
        className="categories"
        sx={{
          display: 'flex',
          alignItems: 'center',
          // border: '1px solid',
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
}

export default Categories;