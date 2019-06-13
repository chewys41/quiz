import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { cssQuizQuestions } from "../../questions/AllQuestions";

class CSS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1",
      cssQuizQuestions: cssQuizQuestions
    };
  }

  randomQuestionGenerator = arr => {
    let newPos, temp;
    for (let i = arr.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[newPos];
      arr[newPos] = temp;
    }
    return arr[0].title;
  };
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
    const randomQuestion = this.randomQuestionGenerator(cssQuizQuestions);
    return (
      <div>
        <Card className="text-center container mx-auto mt-5 col-6">
          <Card.Header>CSS Quiz</Card.Header>
          <Card.Body>
            <Card.Text>{randomQuestion}</Card.Text>
            <form onSubmit={this.handleFormSubmit}>
              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="Computer Style Sheets"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  Computer Style Sheets
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="Cascading Style Sheets"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  Cascading Style Sheets
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="Creative Style Sheets"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  Creative Style Sheets
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="Colorful Style Sheets"
                    value="option4"
                    checked={this.state.selectedOption === "option4"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  Colorful Style Sheets
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
export default CSS;
