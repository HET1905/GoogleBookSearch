import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../Navbar";
import HeroDiv from "../HeroDiv";
import BookSerch from "../BookSearch";
import BooksSaved from "../BooksSaved";

function Wrapper() {
  return (
    <Router>
      <div>
        <Navbar />
        <HeroDiv />
        <Switch>
            <Route exact path="/" component={BookSerch} />
            <Route exact path="/serch" component={BookSerch} />
            <Route exact path="/saved" component={BooksSaved} />
        </Switch>
       
      </div>
    </Router>
  );
}

export default Wrapper;
