import React, { useState } from 'react';
import Display from './Display';
const SearchBar = () => {
const [searchTerm, setSearchTerm] = useState('');
    return (
        <div>
            <input type="text" placeholder="Search..." />
            <Display />
           
        </div>
    );
}
export default SearchBar;