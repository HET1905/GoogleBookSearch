import React from "react";
import Result from "../Result";
import API from "../../utils/API";

class BooksSavedPage extends React.Component {
    
        state = {
            savedBooks: []
        }
    

    componentWillMount=()=> {
        API.getBooks().then(
            (response) => {
                this.setState({savedBooks: response.data});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        console.log(this.state.savedBooks);
        return(
            <main>
                <h1>Books Saved Page</h1>
                <Result savedBooks={this.state.savedBooks} path={this.props.match.path}/>
            </main>
        );
    }
}

export default BooksSavedPage;