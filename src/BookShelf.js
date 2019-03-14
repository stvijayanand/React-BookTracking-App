import React from "react";
import BooksGrid from "./BooksGrid";

const BookShelf = props => {
  const { shelfName } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <BooksGrid></BooksGrid>
      </div>
    </div>
  );
};

export default BookShelf;
