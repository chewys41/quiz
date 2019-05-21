import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import UserQuizes from "./components/layout/UserQuizes";
import JavaScript from "./components/quizes/JavaScript";
import Reactjs from "./components/quizes/Reactjs";
import HTML from "./components/quizes/HTML";
import CSS from "./components/quizes/CSS";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={UserQuizes} />
          <Route path="/javaScript/quiz" component={JavaScript} />
          <Route path="/react/quiz" component={Reactjs} />
          <Route path="/html/quiz" component={HTML} />
          <Route path="/css/quiz" component={CSS} />
        </Switch>
      </Router>
    );
  }
}

export default App;
