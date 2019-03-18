import React from "react"
import { Link } from "react-router-dom"

const SearchButton = props => {

    return (
        <div className="open-search">
            <Link to="/search" className="link-search">
                Add a book
            </Link>
        </div>);
}

export default SearchButton;