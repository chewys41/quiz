import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Layout.css";

class UserQuizes extends Component {
  render() {
    return (
      <Card className=" mx-auto mt-5 w-50 border-info">
        <Card.Header className="text-center bg-info">
          Select a quiz to continue
        </Card.Header>
        <Card.Body className="text-center ">
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
        </Card.Body>
      </Card>
    );
  }
}

export default UserQuizes;
