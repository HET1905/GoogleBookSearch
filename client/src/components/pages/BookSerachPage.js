import React,{Component} from "react";
import BookSearchForm from "../BookSearchForm";
// import ResultsContainer from "../Result";
import Result from "../Result";
import API from "../../utils/API";


class BookSearchPage extends Component {
    
        state = {
            search:"",
            results:[]
        }
    // componentDidMount() {
    //     API.getBooks()
    //         .then(res => 
    //             {   console.log(res.data);
    //                 this.setState({ booksData: res.data } )
    //             })
    //         .catch(err => console.log(err));
    //     }
          
    

    handleInputChange=(e)=> {
        e.preventDefault();
        this.setState(
            {search: e.target.value}
            );
        console.log(this.state.search);
    }

    handleSearchClick=(e)=> {
        e.preventDefault();
        console.log(this.state.search);
        API.getGoogleBooks(this.state.search)
            .then(
                (response) => {
                    console.log(response.data.items);
                    this.setState({bookData: response.data.items});
                    // this.setState({search: ""});
                    // console.log(this.state.bookData);
                }
            );
    }

    render() {
        return(
            <main>
                <BookSearchForm handleInputChange={this.handleInputChange} handleSearchClick={this.handleSearchClick} />
                    
                    <Result bookData={this.state.bookData}/> 
             
            </main>
        );
    }
}

export default BookSearchPage;