import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../home/home";
import Jahon from "../jahon/Jahon";
import Sport from "../sport/sport";
import Texnologiya from "../texnologiya/texnologiya";
const Main = () => {
  return (
    <div>
        <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/jahon" component={Jahon} />
            <Route path="/texnologiya" component={Texnologiya} />
            <Route path="/sport" component={Sport} />
          </Switch>
      </Router>
        </div>
    </div>
  );
};
export default Main;
