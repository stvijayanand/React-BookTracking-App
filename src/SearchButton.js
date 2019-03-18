import React from "react"
//import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const SearchButton = props => {
    //const { onSearch } = props;

    return (
        <div className="open-search">
            <Link to="/search" className="link-search">
                Add a book
            </Link>
            {/* <button onClick={() => onSearch()}>
            </button> */}
        </div>);
}

// SearchButton.propTypes = {
//     onSearch: PropTypes.func.isRequired,
// }


export default SearchButton;