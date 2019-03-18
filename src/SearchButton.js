import React from "react"
import PropTypes from "prop-types"

const SearchButton = props => {
    const { onSearch } = props;

    return (
        <div className="open-search">
            <button onClick={() => onSearch()}>
                Add a book
                </button>
        </div>);
}

SearchButton.propTypes = {
    onSearch: PropTypes.func.isRequired,
}


export default SearchButton;