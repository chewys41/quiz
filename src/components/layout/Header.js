import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();

    this.directToHome = this.directToHome.bind(this);
  }

  directToHome() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Button onClick={this.directToHome} color="success">
            Home
          </Button>
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
}

export default withRouter(Header);
