import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { htmlQuizQuestions } from "../../questions/AllQuestions";
class HTML extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    };
  }

  shuffleQuestions = array => {
    let newPos, temp, randomQuestion;
    for (let i = array.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[newPos];
      array[newPos] = temp;
    }
    return array.shift().title;
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
    const randomQuestion = this.shuffleQuestions(htmlQuizQuestions);
    return (
      <div>
        <Card className="text-center container mx-auto mt-5 col-6">
          <Card.Header>HTML Quiz</Card.Header>
          <Card.Body>
            <Card.Text>{randomQuestion}</Card.Text>
            <form onSubmit={this.handleFormSubmit}>
              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="Hyper Text Markup Language"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  Hyper Text Markup Language
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="Hyperlink Text Markup Language"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  Hyperlink Text Markup Language
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="Home Text Markup Language"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  Home Text Markup Language
                </label>
              </div>

              <div className="quiz-formj">
                <label>
                  <input
                    type="radio"
                    name="Hyper Text Module Language"
                    value="option4"
                    checked={this.state.selectedOption === "option4"}
                    onChange={this.handleOptionChange}
                    className="formj-check-input"
                  />
                  Hyper Text Module Language
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
export default HTML;
