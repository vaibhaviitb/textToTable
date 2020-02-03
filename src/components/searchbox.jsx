import React from 'react';

const searchbox = ({seacrchTect, placeholder, onChange})=>
    <div>
        <input
            type='text'
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>

export default searchbox;