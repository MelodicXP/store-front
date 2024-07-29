'use strict';
import './Header.scss';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import { useSelector } from "react-redux";

const Header = () => {
  const numberOfItemsInCart = useSelector((state) => state.cart.numberOfItemsInCart);
  return (
    <>
      <header className="header">
        <h1>OUR STORE</h1>
      </header>
      <p>Number of items in cart: {numberOfItemsInCart}</p>

      <Box sx={{ boxShadow: 3 }}>
        <Divider />
      </Box>
    </>
  );
}

export default Header