import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookShelf from "./BookShelf";
import SearchButton from "./SearchButton";
import SearchBooksBar from "./SearchBooksBar";
import * as BooksAPI from "./BooksAPI";
import * as Constants from "./utilities";
import Book from "./Book"

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
    this.setState(currentState => {
      if (currentState.showSearchPage) {
        return { books: currentState.books }
      }
      else {
        BooksAPI.getAll().then(books => (
          this.setState({ books })
        ));
      }
    });
  }

  updateBookShelf = (bookToUpdate, newShelf) => {
    BooksAPI.update(bookToUpdate, newShelf);

    this.setState((currentState) => {
      let newBooks = {};

      newBooks = currentState.books.map(book => {
        if (bookToUpdate.id !== book.id) {
          return book;
        }
        else {
          return Object.assign({}, book, { shelf: newShelf });
        }
      });

      return {
        books: newBooks
      };
    });
  }

  onSearch = () => {
    this.setState({ showSearchPage: true });
  }

  searchByTitleOrAuthor = query => {

    BooksAPI.search(query).then(books => (
      this.setState(currentState => {
        return { books };
      })

    )).catch(() => (
      console.log('catch')
    ));
  }


  render() {
    const { books } = this.state;

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <SearchBooksBar onInput={this.searchByTitleOrAuthor}></SearchBooksBar>
            <div className="search-books-results">
              <ol className="books-grid">
                {books && Array.isArray(books) && books.map(book => (
                  <Book key={book.id}
                    bookInfo={book}
                    updateBookShelf={this.updateBookShelf}></Book>
                ))
                }
              </ol>
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
              <SearchButton onSearch={this.onSearch}></SearchButton>
            </div>
          )}
      </div>
    );
  }
}

export default BooksApp;
