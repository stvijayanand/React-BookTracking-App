import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookShelf from "./BookShelf";
import SearchButton from "./SearchButton";
import SearchBooksBar from "./SearchBooksBar";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    shelves: []
  };

  render() {
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
                  <BookShelf shelfName="Currently Reading" />
                  <BookShelf shelfName="Want to Read" />
                  <BookShelf shelfName="Read" />
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
