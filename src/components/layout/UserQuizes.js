import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class UserQuizes extends Component {
  render() {
    return (
      <Card className=" container mx-auto mt-5">
        <Card.Header className="text-center">
          Select a quiz to continue
        </Card.Header>
        <Card.Body className="text-center">
          <Button className="mr-5" variant="primary">
            javaScript
          </Button>
          <Button className="mr-5" variant="primary">
            HTML
          </Button>
          <Button className="mr-5" variant="primary">
            CSS
          </Button>
          <Button className="mr-5" variant="primary">
            React
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default UserQuizes;
