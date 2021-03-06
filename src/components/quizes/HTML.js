import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { htmlQuizQuestions } from "../../questions/Questions";
class HTML extends Component {
  state = {
    userAnswer: null,
    currentQuestion: 0,
    options: []
  };
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  loadQuiz = () => {
    this.shuffle(htmlQuizQuestions)
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        questions: htmlQuizQuestions[currentQuestion].title,
        options: htmlQuizQuestions[currentQuestion].answers,
        answers: htmlQuizQuestions[currentQuestion].correcctAns
      };
    });
  };
  componentDidMount() {
    this.loadQuiz();
  }

  nextQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };
  componentDidUpdate(prevProps, prevState) {
    const { currentQuestion } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          questions: htmlQuizQuestions[currentQuestion].title,
          options: htmlQuizQuestions[currentQuestion].answers,
          answers: htmlQuizQuestions[currentQuestion].correcctAns
        };
      });
    }
  }

  render() {
    const { questions, options } = this.state;
    return (
      <div>
        <Card className="text-center form-group mx-auto mt-5 col-6">
          <Card.Header>
            <h3>HTML Quiz</h3>
          </Card.Header>
          <Card.Body className="form-group">
            <Card.Text>
              <h5>{questions}</h5>
            </Card.Text>
            <form>
              <div className="d-flex flex-column">
                {this.shuffle(options.map(option => (
                  <label>
                    <input
                      type="radio"
                      name="question"
                      value={option}
                      className="form-check-input input-group-prepend ml-5"
                      key={option}
                    />
                    {option}
                  </label>
                )))}
              </div>
            </form>
            <button onClick={this.nextQuestion}>NEXT</button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default HTML;
