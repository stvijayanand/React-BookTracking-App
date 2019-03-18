import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import Shelves from "./Shelves";
import Search from "./Search";
import { Route } from "react-router-dom"

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  };

  getAll = () => {
    BooksAPI.getAll().then(books => (
      this.setState({ books })
    ));
  }


  componentDidMount() {
    this.getAll();
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

  searchByTitleOrAuthor = query => {
    BooksAPI.search(query).then(books => (
      this.setState({ books })
    )).catch((error) => (
      console.log(error)
    ));
  }


  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Shelves books={books}
              updateBookShelf={this.updateBookShelf}></Shelves>
          )}></Route>

        <Route
          path="/search"
          render={() => (
            <Search books={books}
              updateBookShelf={this.updateBookShelf}
              searchByTitleOrAuthor={this.searchByTitleOrAuthor}
              onClose={this.getAll}></Search>
          )}></Route>

      </div>
    );
  }
}

export default BooksApp;
