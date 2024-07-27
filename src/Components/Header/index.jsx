'use strict';
import './Header.scss';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>OUR STORE</h1>
      </header>
      <Box sx={{ boxShadow: 3 }}>
        <Divider />
      </Box>
    </>
  );
}

export default Header