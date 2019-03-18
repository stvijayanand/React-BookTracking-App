import React from "react"
import SearchBooksBar from "./SearchBooksBar";
import Book from "./Book"
import PropTypes from "prop-types"

const Search = props => {
    const { books, updateBookShelf, searchByTitleOrAuthor, onClose } = props;

    return (<div className="search-books">
        <SearchBooksBar onInput={searchByTitleOrAuthor}
            onClose={onClose}></SearchBooksBar>
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

Search.propTypes = {
    updateBookShelf: PropTypes.func.isRequired,
    searchByTitleOrAuthor: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Search;