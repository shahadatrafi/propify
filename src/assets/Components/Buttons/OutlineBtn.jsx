import React from 'react';
import { Link } from 'react-router-dom';

const OutlineBtn = ({to, text}) => {
    return (
        <Link to={to} className=''>
            {text}
        </Link>
    );
};

export default OutlineBtn;