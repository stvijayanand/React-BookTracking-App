import React, { Component } from "react"
import * as Constants from "./utilities"

class BookShelfChanger extends Component {
    state = {
        option: ''
    }

    handleChange = event => {
        const { bookInfo, updateBookShelf } = this.props;

        console.log(event.target.value);
        if (event.target.value !== bookInfo.shelf) {
            //            updateBookShelf(bookInfo, event.target.value);
        }
    }

    render() {
        const { bookInfo } = this.props;
        const currentShelf = Object.entries(Constants.shelves).filter(shelf => shelf[0] === bookInfo.shelf);
        const OtherShelves = Object.entries(Constants.shelves).filter(shelf => shelf[0] !== bookInfo.shelf);


        return (<div className="book-shelf-changer">
            <select onChange={this.handleChange} value={this.state.option}>
                <option value="move" disabled>
                    Move to...
            </option>
                <option value={Constants.NONE}>None</option>
            </select>
        </div>);
    }
}

export default BookShelfChanger;