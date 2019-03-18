import React from "react";
import Book from "./Book";
import PropTypes from "prop-types"

const BookShelf = props => {
  const { shelfName, books, updateBookShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <Book key={book.id}
              bookInfo={book}
              updateBookShelf={updateBookShelf}></Book>
          )
          )
          }
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

export default BookShelf;
