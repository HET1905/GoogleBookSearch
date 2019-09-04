import React, { Component } from "react";
import BookSearchForm from "../BookSearchForm";
import ResultContainer from "../ResultContainer";
import Result from "../Result";
// import Result from "../Result";
import API from "../../utils/API";

class BookSearchPage extends Component {
  state = {
    search: "",
    booksData: [],
    title:"",
    authors:"",
    description:"",
    image:"",
    link:""
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
  alertDisplay =()=>{
    alert('Record saved');
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
    // console.log(this.state.search);
  };

  handleSearchClick = e => {
    e.preventDefault();
    // console.log(this.state.search);
    API.getGoogleBooks(this.state.search).then(response => {
      // console.log(response.data.items);
      this.setState({ booksData: response.data.items });
      // this.setState({search: ""});
      // console.log(this.state.bookData);
    });
  };

  onSaveClick = (title,author,imgLink,description,link) =>{
    // alert('Save Attached');
    // alert('Title : ' + title);  
    // console.log(title,author,imgLink,description,link);
    API.addBookToDB({
      title:title,
      authors:author.toString(),
      description:description,
      image:imgLink,
      link:link
    })
    .then(this.alertDisplay)
    .catch(err=>console.log(err));
  };
  viewOnClick =(title) =>{
    // alert('View attached');
    alert("title : " + title);
   
  }


  render() {
    // console.log(this.state.booksData);
    return (
      <div>
        <BookSearchForm
          handleInputChange={this.handleInputChange}
          handleSearchClick={this.handleSearchClick}
        />
        

        <ResultContainer>
          {this.state.booksData.map(book => {
          //  console.log(book.volumeInfo.title);
            return (
            <Result key={book.volumeInfo.title} 
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            link ={book.accessInfo.webReaderLink} 
                            imgLink={book.volumeInfo.imageLinks.thumbnail}
                            onSaveClick= {this.onSaveClick}
                            viewOnClick = {this.viewOnClick}
                           
            />);
          })}
        </ResultContainer>
      </div>
    );
  }
}

export default BookSearchPage;
