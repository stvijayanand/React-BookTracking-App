import React from "react"
import SearchBooksBar from "./SearchBooksBar";
import Book from "./Book"

const Search = props => {
    const { books, updateBookShelf, searchByTitleOrAuthor } = props;

    return (<div className="search-books">
        <SearchBooksBar onInput={searchByTitleOrAuthor}></SearchBooksBar>
        <div className="search-books-results">
            <ol className="books-grid">
                {books && Array.isArray(books) && books.map(book => (
                    <Book key={book.id}
                        bookInfo={book}
                        updateBookShelf={updateBookShelf}></Book>
                ))
                }
            </ol>
        </div>
    </div>
    );
}

export default Search;