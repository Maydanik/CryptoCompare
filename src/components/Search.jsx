import React from 'react';

const SearchComponent = (props) => (
    <div>
        <span className = 'search'>Search</span>
        <input
            type='text'
            name='search'
            id='search'
            placeholder='type to search'
            value={props.value}
            onChange={props.onChange}>
        </input>
    </div>
);

export default SearchComponent;