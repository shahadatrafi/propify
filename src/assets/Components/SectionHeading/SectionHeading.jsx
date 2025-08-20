import React from 'react';

const SectionHeading = ({title, extraClass}) => {
    return (
        <>
         <h2 className={`text-6xl font-semibold leading-16 capitalize ${extraClass}`}>{title}</h2>   
        </>
    );
};

export default SectionHeading;