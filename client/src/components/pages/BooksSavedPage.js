import React from "react";
// import Result from "../Result";
// import ResultContainer from "../ResultContainer";
import BookSavedContainer from "../BookSavedContainer";
import BookSaved from "../BooksSaved";
import API from "../../utils/API";

class BooksSavedPage extends React.Component {
  state = {
    savedBooks: []
  };

  componentDidMount = () => {
    API.getBooks()
      .then(response => {
        this.setState({ savedBooks: response.data });
        // console.log(this.state.savedBooks);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.savedBooks);
    return (
      <main>
        <h1>Books Saved Page</h1>
       

        <BookSavedContainer>
          {this.state.savedBooks.map(book => {
            return (
              <BookSaved
                key={book._id}
                title={book.title}
                author={book.authors}
                description={book.description}
                link={book.link}
                imgLink={book.image}
              />
            );
          })}
        </BookSavedContainer>
      </main>
    );
  }
}

export default BooksSavedPage;
