import React, { Component } from "react";
import BookSearchForm from "../BookSearchForm";
import ResultsContainer from "../ResultContainer";
import Result from "../Result";
// import Result from "../Result";
import API from "../../utils/API";

class BookSearchPage extends Component {
  state = {
    search: "",
    results: [],
    bookData: []
  };
  componentDidMount() {
    API.getGoogleBooks("HTML")
      .then(res => {
        console.log(res.data.items);
        this.setState({ booksData: res.data.items });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
    console.log(this.state.search);
  };

  handleSearchClick = e => {
    e.preventDefault();
    console.log(this.state.search);
    API.getGoogleBooks(this.state.search).then(response => {
      console.log(response.data.items);
      this.setState({ bookData: response.data.items });
      // this.setState({search: ""});
      // console.log(this.state.bookData);
    });
  };

  render() {
    return (
      <div>
        <BookSearchForm
          handleInputChange={this.handleInputChange}
          handleSearchClick={this.handleSearchClick}
        />
        <Result />

        <ResultsContainer>
          {this.state.bookData.map(book => {
            return (
            <Result key={book.volumeInfo.title} 
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            description={book.searchInfo.textSnippet}
                            link ={book.selfLink} 
            />);
          })}
        </ResultsContainer>
      </div>
    );
  }
}

export default BookSearchPage;
