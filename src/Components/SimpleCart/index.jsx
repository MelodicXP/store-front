'use strict';
import './SimpleCart.scss';

import { Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { DELETE_FROM_CART } from '../../store/products/productsSlice';
import { DECREMENT_NUM_CART_ITEMS } from '../../store/cart/cartSlice';

const SimpleCart = () => {
  const dispatch = useDispatch();

  const itemsInCart = useSelector((state) => state.cartSlice.itemsInCart);

  const handleDeleteFromCart = (item, index) => {
    dispatch(DELETE_FROM_CART({ item }));
    dispatch(DECREMENT_NUM_CART_ITEMS({ index }));
  }

  return (
    <div className='shopping-cart-container'>
      <Paper className='shopping-cart-list'>
        <List>
          {itemsInCart.map((item, index) => (
            <ListItem 
              key={index}
              className='shopping-cart-item'
              secondaryAction={
                <IconButton onClick={() => handleDeleteFromCart(item, index)} edge="end" aria-label="delete">
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
