import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import UserQuizes from "./UserQuizes";

export default function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container className="justify-content-md-center">
          <Navbar.Brand className="navbarText">
            <h1>Welcome To Quizzler</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <UserQuizes />
    </div>
  );
}
