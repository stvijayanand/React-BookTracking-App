import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

class SearchBooksBar extends Component {
    state = {
        searchText: ''
    }

    static propTypes = {
        onInput: PropTypes.func.isRequired
    }


    handleSearchChange = query => {
        const { onInput } = this.props;

        this.setState({ searchText: query });

        onInput(query);
    }


    render() {
        const { searchText } = this.state;
        const { onClose } = this.props;


        return (<div className="search-books-bar">
            <Link to="/" className="close-search" onClick={onClose}>
                close
        </Link>

            <div className="search-books-input-wrapper">
                {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
                <input type="text" placeholder="Search by title or author"
                    value={searchText}
                    onChange={event => this.handleSearchChange(event.target.value)} />
            </div>
        </div>);
    }
}

export default SearchBooksBar;