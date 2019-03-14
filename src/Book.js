import React from "react"
import BookShelfChanger from "./BookShelfChanger";

const Book = props => {
    const { bookInfo } = props;
    //console.log(bookInfo.imageLinks.thumbnail);
    const imageStyle = {
        width: 128,
        height: 193,
        backgroundImage:
            'url(' + bookInfo.imageLinks.thumbnail + '})'
    };

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
            <div className="book-authors">{bookInfo.authors[0]}</div>
        </div>
    </li>);
}

export default Book;