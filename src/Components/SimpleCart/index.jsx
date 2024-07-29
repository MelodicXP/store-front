'use strict';
import './SimpleCart.scss';

import { Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from '../../store/actions';

const SimpleCart = () => {
  const dispatch = useDispatch();

  const itemsInCart = useSelector((state) => state.cart.itemsInCart);

  const handleDeleteFromCart = (item) => {
    dispatch(deleteFromCart(item));
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
                <IconButton onClick={() => handleDeleteFromCart(index)} edge="end" aria-label="delete">
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