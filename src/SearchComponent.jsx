import React, { useState } from "react";
import SearchIcon from './search.svg';

const SearchBar = ({placeholder, searchFunction}) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="search">
            <input 
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => {
                    searchFunction(searchTerm);
                }}
            />
        </div>
    )
}

export default SearchBar;
