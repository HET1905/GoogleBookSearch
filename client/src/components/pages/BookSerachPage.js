import React, { Component } from "react";
import BookSearchForm from "../BookSearchForm";
import ResultContainer from "../ResultContainer";
import Result from "../Result";
// import Result from "../Result";
import API from "../../utils/API";

class BookSearchPage extends Component {
  state = {
    search: "",
    results: [],
    booksData: []
  };
  componentDidMount() {
    API.getGoogleBooks("HTML")
      .then(res => {
        // console.log(res.data.items);
        this.setState({ booksData: res.data.items });
        // console.log(this.state.booksData);
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
      this.setState({ booksData: response.data.items });
      // this.setState({search: ""});
      // console.log(this.state.bookData);
    });
  };

  render() {
    console.log(this.state.booksData);
    return (
      <div>
        <BookSearchForm
          handleInputChange={this.handleInputChange}
          handleSearchClick={this.handleSearchClick}
        />
        {/* <Result /> */}

        <ResultContainer>
          {this.state.booksData.map(book => {
           console.log(book.volumeInfo.title);
            return (
            <Result key={book.volumeInfo.title} 
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            description={book.searchInfo.textSnippet}
                            link ={book.selfLink} 
            />);
          })}
        </ResultContainer>
      </div>
    );
  }
}

export default BookSearchPage;
