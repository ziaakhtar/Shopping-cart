// src/components/ProductCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const history = useHistory();

  const handleViewDetails = () => {
    history.push(`/product/${product.id}`);
  };

  return (
    <Card>
      <CardMedia component="img" alt={product.title} height="140" image={product.image} />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
        <Button variant="contained" onClick={handleViewDetails}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
