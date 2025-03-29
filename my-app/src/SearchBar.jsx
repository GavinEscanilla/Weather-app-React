import React, { useState } from 'react';
import Display from './Display';
const SearchBar = () => {
const [searchTerm, setSearchTerm] = useState('');
const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
};
    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search..." />
            <Display  searchTerm={searchTerm}/>
           
        </div>
    );
}
export default SearchBar;