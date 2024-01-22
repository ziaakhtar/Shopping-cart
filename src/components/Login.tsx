// src/components/Login.tsx
import React from 'react';
import { Container, Card, Input, Button } from '../styles';

const Login: React.FC = () => {
  return (
    <Container>
      <h2>Login</h2>
      <Card>
        <form>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
