import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class Reactjs extends Component {
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
        <Card className="text-center container mx-auto mt-5">
          <Card.Header>ReactJS Quiz</Card.Header>
          <Card.Body>
            <Card.Text>What is ReactJS?</Card.Text>
            <form onSubmit={this.handleFormSubmit}>
              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="Server-side Framework"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  Server-side Framework
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="User-interface framework"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  User-interface framework
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="Both"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  Both
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="None"
                    value="option4"
                    checked={this.state.selectedOption === "option4"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  None
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

export default Reactjs;
