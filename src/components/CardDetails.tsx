import React from 'react';

interface CardDetailsProps {
    brand: string;
    km: number;
    color: string;
}

const CardDetails: React.FC<CardDetailsProps> = ({ brand, km, color }) => {
    return (
        <div className="card__details grid grid-cols-4 gap-4 mt-4">
            <h3 className="text-2xl font-semibold mt-2"> Car Details </h3>
            <ul>
                <li> Brand: {brand} </li>
                <li> Km: {km} </li>
                <li> Color: {color} </li>
            </ul>
        </div>
    );
}

export default CardDetails;

