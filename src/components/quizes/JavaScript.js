import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class JavaScript extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:", this.state.selectedOption);
  };
  render() {
    return (
      <div>
        <Card className="text-center container mx-auto mt-5 col-6">
          <Card.Header>javaScript Quiz</Card.Header>
          <Card.Body>
            <Card.Text>What year was JavaScript created?</Card.Text>
            <form onSubmit={this.handleFormSubmit}>
              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="1994"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  1994
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="1988"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  1988
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="1996"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  1996
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="1995"
                    value="option4"
                    checked={this.state.selectedOption === "option4"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  1995
                </label>
              </div>
            </form>
            <Button
              className="mr-3"
              onClick={this.handleFormSubmit}
              variant="primary"
            >
              BACK
            </Button>

            <Button onClick={this.handleFormSubmit} variant="primary">
              NEXT
            </Button>
          </Card.Body>
        </Card>
        ;
      </div>
    );
  }
}

export default JavaScript;
