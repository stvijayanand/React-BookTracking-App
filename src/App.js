import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookShelf from "./BookShelf";
import SearchButton from "./SearchButton";
import SearchBooksBar from "./SearchBooksBar";
import * as BooksAPI from "./BooksAPI";
import * as Constants from "./utilities";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  };


  componentDidMount() {
    BooksAPI.getAll().then(books => (
      this.setState({ books })
    ));
  }

  updateBookShelf = (bookToUpdate, shelf) => {
    console.log(bookToUpdate);
    BooksAPI.update(bookToUpdate, shelf);

    this.setState((currentState) => {
      let newBooks = {};

      newBooks = currentState.books.map(book => {
        if (bookToUpdate.id !== book.id) {
          return book;
        }
        else {
          console.log("id match");
          return Object.assign({}, book, { shelf: bookToUpdate.shelf });
        }
      });

      return {
        books: newBooks
      };
    });
  }

  render() {
    const { books } = this.state;
    // Object.entries(Constants.shelves).forEach(entry => (
    //   console.log(entry[0])
    // ))


    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <SearchBooksBar></SearchBooksBar>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {Object.entries(Constants.shelves).map(entry => (
                    <BookShelf key={entry[0]}
                      shelfName={entry[1]}
                      books={books.filter(book => book.shelf === entry[0])}
                      updateBookShelf={this.updateBookShelf} />
                  ))
                  }
                </div>
              </div>
              <SearchButton></SearchButton>
            </div>
          )}
      </div>
    );
  }
}

export default BooksApp;
