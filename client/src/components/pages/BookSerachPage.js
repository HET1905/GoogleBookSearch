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
                    console.log(response.data);
                    this.setState({bookData: response.data});
                    // this.setState({search: ""});
                }
            );
    }

    render() {
        return(
            <main>
                <BookSearchForm handleInputChange={this.handleInputChange} handleSearchClick={this.handleSearchClick} />
               
                    <Result/> 
             
            </main>
        );
    }
}

export default BookSearchPage;