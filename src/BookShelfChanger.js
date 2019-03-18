import React, { Component } from "react"
import * as Constants from "./utilities"


class BookShelfChanger extends Component {
    state = {
        option: ''
    }

    handleChange = event => {
        const { bookInfo, updateBookShelf } = this.props;

        updateBookShelf(bookInfo, event.target.value);
    }

    render() {
        //const { bookInfo } = this.props;
        //const currentShelf = Object.entries(Constants.shelves).filter(shelf => shelf[0] === bookInfo.shelf)[0];
        //const OtherShelves = Object.entries(Constants.shelves).filter(shelf => shelf[0] !== bookInfo.shelf);

        // console.log(bookInfo);
        // console.log(currentShelf);
        // console.log(OtherShelves);

        const optionsSearch = Object.entries(Constants.shelves).map(entry => (
            <option key={entry[0]} value={entry[0]}>{entry[1]}</option>
        )
        );

        return (<div className="book-shelf-changer">
            <select onChange={this.handleChange} value={this.state.option}>
                <option value="move" disabled>
                    Move to...
            </option>
                {optionsSearch}
                {/* {currentShelf === undefined ? (
                    <option value={Constants.NONE}>None</option>
                ) : (
                        <option value={currentShelf[0]}>* {currentShelf[1]}</option>
                        {OtherShelves.map(entry => (
                            <option key={entry[0]} value={entry[0]}>{entry[1]}</option>
                ))
                }
            )

        } */}
                <option value={Constants.NONE}>None</option>
            </select>
        </div>);
    }
}

export default BookShelfChanger;