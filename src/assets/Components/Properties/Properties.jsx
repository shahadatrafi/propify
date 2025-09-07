import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import { useLoaderData } from 'react-router-dom';

const Properties = () => {

    const properties = useLoaderData();

    return (
        <div className='container mx-auto mt-12 grid grid-cols-3 gap-6'>
            {
                properties.map (property => <PropertyCard property={property} key={property.id}></PropertyCard>)
            }
        </div>
    );
};

export default Properties;