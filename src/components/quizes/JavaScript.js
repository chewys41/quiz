import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { javascriptQuizQuestions } from "../../questions/AllQuestions";

class JavaScript extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "option1",
      currentQuestion: 0,
      options: []
    };
  }

  // shuffleQuestions = array => {
  //   let i = array.length - 1;
  //   let shiftedQuestion = array;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //     shiftedQuestion.shift(j, 0);
  //   }
  //   return shiftedQuestion.title;
  // };

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

  loadAnswers = () => {};
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
    const randomQuestion = this.shuffleQuestions(javascriptQuizQuestions);

    // console.log(this.shuffleQuestions(javascriptQuizQuestions));
    return (
      <div>
        <Card className="text-center container mx-auto mt-5 col-6">
          <Card.Header>javaScript Quiz</Card.Header>
          <Card.Body>
            <Card.Text>{randomQuestion}</Card.Text>
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
                  1234
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

            <Button onClick={this.handleOptionChange} variant="primary">
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
