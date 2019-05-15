import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import UserQuizes from "./components/layout/UserQuizes";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Switch>
            <Route exact path="userquizes" component={UserQuizes} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
