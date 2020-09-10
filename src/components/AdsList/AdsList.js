import React from 'react';

import Ad from '../Ad/Ad';

import './AdsList.css';

export default (props) => {
    const { ads, deleteAd } = props;

    return (
        <div className="board-ads">
            {ads.map((ad, index) => 
                <Ad ad={ad} deleteAd={deleteAd} index={index} key={Math.random()}/>
            )}   
        </div>
    )
}