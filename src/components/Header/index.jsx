import React from 'react';

import Input from "../Input";

import './Header.scss';

import searchButton from "../../assets/images/Search_button.svg"
import female from "../../assets/images/healthback.jpg";
import LocationIcon from "../../assets/images/locationIcon.svg";



function index() {
    const countryMap = ["New York, USA", "Los Angeles, USA", "Tashkent, UZB", "Moscow, RUSSIA", "Mexico, MEXICO", "Istanbul, TURKEY", "Dubay, BAA"]

    return (
        <div className="header__content">
            <img className="header__content-imageBg" src={female} alt="Healthback" />
            <div className="header__content-search">
                <h2 className="header__content-search-title">Find And Search
                    Your <span>Suitable Doctor’s</span></h2>
                <p className="header__content-search-about">Join us and take care of yourself and your family with health services that will make you feel confident and safe in your daily life.</p>
                <div className="header__content-search-section">
                    <Input grey placeholder="Find your doctor..." />
                    <div className="input-one">
                        <img src={LocationIcon} alt="LocationIcon" />
                        <select name="country" id="country">
                            {
                                countryMap.map((items, index) => (
                                    <option key={index} value={items}>{items}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button><img src={searchButton} alt="SearchButton" /></button>
                </div>
            </div>
        </div>
    )
}

export default index;
