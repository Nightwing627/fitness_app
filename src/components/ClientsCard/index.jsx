import React from 'react';

import './ClientsCard.scss';

function ClientsCard({ client, quote, name, stars, country, comment }) {
    return (
        <div className="clients__card">
            <img className="clients__photo" src={client} alt="client" />
            <img className="clients__quote" src={quote} alt="quote" />
            <div className="clients__card-name">
                <h3>{name}</h3>
                <img src={stars} alt="stars" />
            </div>
            <h4>{country}</h4>
            <p>{comment}</p>
        </div>
    )
};

export default ClientsCard;
