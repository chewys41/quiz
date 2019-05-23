import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button } from "reactstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Button color="success">Home</Button>
        <Container className="justify-content-md-center">
          <Navbar.Brand className="navbarText">
            <h1>Welcome To Quizzler</h1>
          </Navbar.Brand>
        </Container>
        <Button color="success">Sign In</Button>
      </Navbar>
    </div>
  );
}
