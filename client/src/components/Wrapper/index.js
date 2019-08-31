import React,{ Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import API from "../../utils/API";
import Navbar from "../Navbar";
import HeroDiv from "../HeroDiv";
import BookSerchPage from "../pages/BookSerachPage";
import BooksSavedPage from "../pages/BooksSavedPage";
// import Result from "../Result";

class Wrapper extends Component{

  state = {
    books: [],
    bookSerach: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(this.state.bookSerach)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render(){
 
  return (
    <Router>
      <div>
        <Navbar />
        <HeroDiv />
        <Switch>
            <Route exact path="/" component={BookSerchPage} />
            <Route exact path="/serch" component={BookSerchPage} />
            <Route exact path="/saved" component={BooksSavedPage} />
        </Switch>
        {/* <Result /> */}
      </div>
    </Router>
  );
  }
}

export default Wrapper;
