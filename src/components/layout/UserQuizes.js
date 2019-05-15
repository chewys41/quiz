import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class UserQuizes extends Component {
  constructor(props) {
    super(props);
    this.toJavaScriptQuiz = this.toJavaScriptQuiz.bind(this);
  }

  toJavaScriptQuiz() {
    this.props.history.push("/javaScript/quiz");
  }

  render() {
    return (
      <Card className=" container mx-auto mt-5">
        <Card.Header className="text-center">
          Select a quiz to continue
        </Card.Header>
        <Card.Body className="text-center">
          <Button
            className="mr-5"
            variant="primary"
            onClick={this.toJavaScriptQuiz}
          >
            javaScript
          </Button>

          <Button className="mr-5" variant="primary">
            HTML
          </Button>
          <Button className="mr-5" variant="primary">
            CSS
          </Button>
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