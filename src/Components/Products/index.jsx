'use strict';
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Box } from "@mui/material";
import './Products.scss';


const Products = () => {
  // Pulls state via useSelector from counter.js in the intiial state
  const products = useSelector((state) => state.products.filteredProducts);
  
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
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default Products;