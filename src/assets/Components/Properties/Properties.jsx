import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';

const Properties = ({properties}) => {

    

    return (
        <div className='container mx-auto mt-12 grid grid-cols-3 gap-6'>
            {
                properties.map (property => <PropertyCard property={property} key={property.id}></PropertyCard>)
            }
        </div>
    );
};

export default Properties;