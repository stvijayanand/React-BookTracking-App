import React, { Component } from "react"
import * as Constants from "./utilities"
import PropTypes from "prop-types"


class BookShelfChanger extends Component {
    state = {
        option: ''
    }

    static propTypes = {
        bookInfo: PropTypes.object.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    handleChange = event => {
        const { bookInfo, updateBookShelf } = this.props;

        updateBookShelf(bookInfo, event.target.value);
    }

    render() {
        const { bookInfo } = this.props;
        const currentShelf = Object.entries(Constants.shelves).filter(shelf => shelf[0] === bookInfo.shelf)[0];
        const OtherShelves = Object.entries(Constants.shelves).filter(shelf => shelf[0] !== bookInfo.shelf);

        let optionsElement;
        if (currentShelf) {
            optionsElement = [<option key={currentShelf[0]} value={currentShelf[0]}>* {currentShelf[1]}</option>
                , OtherShelves.map(entry => (
                    <option key={entry[0]} value={entry[0]}>{entry[1]}</option>
                ))
                , <option key={Constants.NONE} value={Constants.NONE}>None</option>];
        }
        else {
            optionsElement = [<option key={Constants.NONE} value={Constants.NONE}>* None</option>
                , Object.entries(Constants.shelves).map(entry => (
                    <option key={entry[0]} value={entry[0]}>{entry[1]}</option>
                ))];
        }

        return (<div className="book-shelf-changer">
            <select onChange={this.handleChange} value={this.state.option}>
                <option value="move" disabled>
                    Move to...
            </option>
                {optionsElement}

            </select>
        </div>);
    }
}

export default BookShelfChanger;