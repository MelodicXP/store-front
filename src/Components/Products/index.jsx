'use strict';
import { useDispatch, useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Box, Button } from "@mui/material";
import './Products.scss';
import { addToCart } from '../../store/actions';
import { useEffect } from "react";
import { getProducts } from '../../store/actions';


const Products = () => {
  const dispatch = useDispatch();
  
  // Pulls state via useSelector from counter.js in the intiial state
  const products = useSelector((state) => state.products.filteredProducts);

  // GET products from API on page load
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  }
  
  return (
    <div>
      <Box 
        display="flex" 
        className="product-list"
        sx={{ flexWrap: 'wrap', gap: 2 }}
      >
        {products.map((product, index) => (
          <Card 
            sx={{ minWidth: 275, maxWidth: 345 }} 
            key={index}
          >
            <img src={product.image} alt={product.name}/>
            <CardContent>
              <Typography>
                {product.name}
              </Typography>
              <Typography>
                {product.description}
              </Typography>
            </CardContent>
            <Button onClick={() => handleAddToCart(product)}>Add To Cart</Button>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default Products;