import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class UserQuizes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className=" container mx-auto mt-5">
        <Card.Header className="text-center">
          Select a quiz to continue
        </Card.Header>
        <Card.Body className="text-center">
          <Link to="/javaScript/quiz">
            <Button className="mr-5" variant="primary">
              javaScript
            </Button>
          </Link>
          <Link to="/HTML/quiz">
            <Button className="mr-5" variant="primary">
              HTML
            </Button>
          </Link>
          <Link to="/CSS/quiz">
            <Button className="mr-5" variant="primary">
              CSS
            </Button>
          </Link>
          <Link to="/react/quiz">
            <Button className="mr-5" variant="primary">
              React
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default UserQuizes;
