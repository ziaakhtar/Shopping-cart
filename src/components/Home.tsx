// src/components/Home.tsx
import React from 'react';
import { useGetProductsQuery } from '../api';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const Home: React.FC = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <Grid container spacing={3}>
      {products?.map((product: any) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
