import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&api_key=AIzaSyCWY9vK1HdPhULh98Oka0qlul3h2bCGHPQ";



export default {
    getBooks: function() {
        return axios.get("/books/api");
    },
    searchBooks: (title) => {
        return axios.post("/search", {title: title});
    },
    addBookToDB: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    },
    getGoogleBooks: function(bookName) {
        // return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName + "&key=AIzaSyCWY9vK1HdPhULh98Oka0qlul3h2bCGHPQ");
        return axios.get(BASEURL + bookName + APIKEY);
      }
}
