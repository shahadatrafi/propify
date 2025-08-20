import React from 'react';

const SubHeading = ({text, extraClass}) => {

    return (
        <div className={`px-6 py-2 border border-gray-200 rounded-full w-fit uppercase text-black ${extraClass}`}>
            <p>{text}</p>
        </div>
    );
};

export default SubHeading;