import React from "react"
import * as Constants from "./utilities";
import BookShelf from "./BookShelf";
import SearchButton from "./SearchButton"
import PropTypes from "prop-types"

const Shelves = props => {
    const { books, updateBookShelf } = props;

    return (<div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                {books && Array.isArray(books) && Object.entries(Constants.shelves).map(entry => (
                    <BookShelf key={entry[0]}
                        shelfName={entry[1]}
                        books={books.filter(book => book.shelf === entry[0])}
                        updateBookShelf={updateBookShelf} />
                ))
                }
            </div>
        </div>
        <SearchButton></SearchButton>
    </div>);
}

Shelves.propTypes = {
    updateBookShelf: PropTypes.func.isRequired
}

export default Shelves;