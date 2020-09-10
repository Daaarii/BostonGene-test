import React from 'react';

import './Ad.css';

export default (props) => {
    const { title, text, phoneNumber, city } = props.ad; 
    const { deleteAd, index } = props;

    return (
        <div className="ad">
            <div className="ad-title">{ title }</div>
            <div className="ad-info">
                <div className="ad-text">{ text }</div>
                <div className="ad-number">Номер: { phoneNumber }</div>
                <div className="ad-city">Город: { city }</div> 
            </div>
            <div className="ad-delete" onClick={(e) => deleteAd(index, e)}>&#10006;</div>
        </div>
    )
}