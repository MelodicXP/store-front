'use strict';
import './SimpleCart.scss';

import { Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { useSelector } from "react-redux";

const SimpleCart = () => {
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className='shopping-cart-container'>
      <Paper className='shopping-cart-list'>
        <List>
          {itemsInCart.map((item, index) => (
            <ListItem 
              key={index}
              className='shopping-cart-item'
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText className='shopping-cart-item-name' primary={item.name}/>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};
export default SimpleCart;