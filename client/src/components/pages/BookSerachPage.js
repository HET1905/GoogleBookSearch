import React,{Component} from "react";
import BookSearchForm from "../BookSearchForm";
import ResultsContainer from "../Result";
import API from "../../utils/API";


class BookSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({bookInput: e.target.value})
    }

    handleSearchClick(e) {
        e.preventDefault();
        API.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    console.log(response);
                    this.setState({bookData: response.data});
                    this.setState({bookInput: ""});
                }
            );
    }

    render() {
        return(
            <main>
                <BookSearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.bookData.length > 0)?
                    <ResultsContainer bookData={this.state.bookData} path={this.props.match.path}/> : null
                }
            </main>
        );
    }
}

export default BookSearchPage;