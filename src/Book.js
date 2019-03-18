import React from "react"
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types"

const Book = props => {
    const { bookInfo, updateBookShelf } = props;

    const backgroundImageUrl = (bookInfo && bookInfo.imageLinks && bookInfo.imageLinks.thumbnail) ?
        'url(' + bookInfo.imageLinks.thumbnail + '})'
        : '';
    const imageStyle = {
        width: 128,
        height: 193,
        backgroundImage: backgroundImageUrl
    };

    let authors = '';
    if (bookInfo.authors) {
        for (let author of bookInfo.authors) {
            authors = (authors.length > 0) ? (authors + ", ") : authors;
            authors += author;
        }
    }

    return (<li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={imageStyle}
                />
                <BookShelfChanger bookInfo={bookInfo}
                    updateBookShelf={updateBookShelf}></BookShelfChanger>
            </div>
            <div className="book-title">{bookInfo.title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    </li>);
}

Book.propTypes = {
    bookInfo: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default Book;