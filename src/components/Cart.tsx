// src/components/Cart.tsx
import React from 'react';
import { Container, Card, Button } from '../styles';

const Cart: React.FC = () => {
  return (
    <Container>
      <h2>Shopping Cart</h2>
      <Card>
        {/* Display cart items */}
        <p>Product 1 - $10</p>
        <p>Product 2 - $20</p>
        {/* ... */}
        <Button>Place Order</Button>
      </Card>
    </Container>
  );
};

export default Cart;
