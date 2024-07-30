'use strict';
import './Header.scss';
import Divider from '@mui/material/Divider';
import { Box, Typography } from '@mui/material';
import { useSelector } from "react-redux";

const Header = () => {
  const numberOfItemsInCart = useSelector((state) => state.cart.numberOfItemsInCart);
  return (
    <>
      <header className="header">
        <h1>OUR STORE</h1>
      </header>
      <Typography className='cart-count'>Cart: ({numberOfItemsInCart})</Typography>

      <Box sx={{ boxShadow: 3 }}>
        <Divider />
      </Box>
    </>
  );
}

export default Header