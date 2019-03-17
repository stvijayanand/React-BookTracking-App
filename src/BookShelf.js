import React from "react";
import Book from "./Book";

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

export default BookShelf;
