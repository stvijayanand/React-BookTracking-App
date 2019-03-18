import React from "react"

const SearchButton = props => {
    const { onSearch } = props;

    return (
        <div className="open-search">
            <button onClick={() => onSearch()}>
                Add a book
                </button>
        </div>);
}


export default SearchButton;