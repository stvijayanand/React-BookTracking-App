import React from "react"
import BookShelfChanger from "./BookShelfChanger";

const Book = props => {
    const { bookInfo } = props;

    const imageStyle = {
        width: 128,
        height: 193,
        backgroundImage:
            'url(' + bookInfo.imageLinks.thumbnail + '})'
    };

    let authors = '';
    for (let author of bookInfo.authors) {
        authors = (authors.length > 0) ? (authors + ", ") : authors;
        authors += author;
    }

    return (<li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={imageStyle}
                />
                <BookShelfChanger></BookShelfChanger>
            </div>
            <div className="book-title">{bookInfo.title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    </li>);
}

export default Book;