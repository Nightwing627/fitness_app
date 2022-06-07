import React from 'react';

import './ServiceCard.scss';

function ServiceCards({title, imageUrl, text}) {
    return (
        <div className="service__cards-item">
            <img src={imageUrl} alt="serviceCardLogo" />
            <h3>{title}</h3>
            <p> {text} </p>
        </div>
    )
}

export default ServiceCards;
