// src/components/ProductDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../api';
import { Typography, Button } from '@mui/material';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data: product } = useGetProductsQuery();

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h4" component="div">
        {product.title}
      </Typography>
      <Typography variant="body1" component="div">
        {product.description}
      </Typography>
      <Typography variant="h6" component="div">
        {product.price}
      </Typography>
      <Button variant="contained">Add to Cart</Button>
    </div>
  );
};

export default ProductDetails;
