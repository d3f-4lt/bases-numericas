import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const MinhaNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          Bases Numéricas
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MinhaNavBar;