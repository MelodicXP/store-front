'use strict';
import { Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { useSelector } from "react-redux";

const SimpleCart = () => {
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);

  return (
    <Paper >
      <List>
        {itemsInCart.map((item, index) => (
          <ListItem 
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={item.name}/>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
export default SimpleCart;