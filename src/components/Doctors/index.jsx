import React from 'react'

import './Doctors.scss'

function Doctors({ name, imageUrl, profession, facebook, twitter, linkedin}) {
    return (
        <div className="doctors__items-card">
            <img className="doctor" src={imageUrl} alt="" />
            <h3>{name}</h3>
            <p>{profession}</p>
            <div className="doctors__items-icons">
                <a href='#3'><img src={facebook} alt="" /></a>
                <a href='#3'><img src={twitter} alt="" /></a>
                <a href='#3'><img src={linkedin} alt="" /></a>
            </div>
        </div>
    )
}

export default Doctors
