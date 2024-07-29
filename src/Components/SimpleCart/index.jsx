'use strict';
import { Box, Typography } from '@mui/material';


const SimpleCart = () => {
  return (
    <Box 
        display="flex" 
        className="product-list"
        sx={{ flexWrap: 'wrap', gap: 2 }}
      >
      <Typography>
        Shopping Cart PlaceHolder
      </Typography>
    </Box>
  );
};
export default SimpleCart;