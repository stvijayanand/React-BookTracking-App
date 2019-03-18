import React from "react"
import BookShelfChanger from "./BookShelfChanger";

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

export default Book;