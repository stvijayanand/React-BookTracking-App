import React from "react"
import * as Constants from "./utilities"

const BookShelfChanger = props => {
    const { currentShelf } = props;

    return (<div className="book-shelf-changer">
        <select>
            <option value="move" disabled>
                Move to...
            </option>
            {currentShelf !== Constants.CURRENTLY_READING &&
                <option value="currentlyReading">Currently Reading</option>
            }
            {currentShelf !== Constants.WANT_TO_READ &&
                <option value="wantToRead">Want to Read</option>
            }
            {currentShelf !== Constants.READ &&
                <option value="read">Read</option>
            }
            <option value="none">None</option>
        </select>
    </div>);
}

export default BookShelfChanger;