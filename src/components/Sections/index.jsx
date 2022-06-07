import React from 'react';

import './Section.scss';
import {  } from "../../assets/images/search.svg";


function Section({ name, imageUrl, about }) {
    return (
        <div className="section">
            <div className="section__sircle">
                <img src={imageUrl} alt="CardsImage" />
            </div>
            <h3>{name}</h3>
            <p>{about}</p>
        </div>
    )
}

export default Section;
