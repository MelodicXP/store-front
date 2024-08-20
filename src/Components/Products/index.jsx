'use strict';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Products.scss';
import { Typography, Box, Button } from "@mui/material";
import { ADD_TO_CART, getProducts } from '../../store/products/productsSlice';
import { INCREMENT_NUM_CART_ITEMS } from '../../store/cart/cartSlice'

const Products = () => {
  const dispatch = useDispatch();
  
  // Get the relevant parts of the state from productsSlice.js
  const { products, filteredProducts, loading, error } = useSelector(
    (state) => state.productsSlice
  );

   // Determine what products to display
   const displayedProducts = filteredProducts.length
   ? filteredProducts
   : products;
  
  // Fetch products on component mount
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  const handleAddToCart = (item) => {
    dispatch(ADD_TO_CART(item));
    dispatch (INCREMENT_NUM_CART_ITEMS(item));
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      <Box 
        display="flex" 
        className="product-list"
        sx={{ flexWrap: 'wrap', gap: 2 }}
      >
        {displayedProducts.map((product, index) => (
          <Card 
            sx={{ minWidth: 275, maxWidth: 345 }} 
            key={index}
          >
            <img src={product.image} alt={product.name}/>
            <CardContent>
              <Typography>{product.name}</Typography>
              <Typography>{product.description}</Typography>
            </CardContent>
            <Button onClick={() => handleAddToCart(product)}>Add To Cart</Button>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default Products;