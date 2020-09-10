import React, { Component } from 'react';

import BoardForm from '../BoardForm/BoardForm';
import AdsList from '../AdsList/AdsList';

import './Board.css';

export default class extends Component {

    state = {
        ads: [
            {
                title: 'Skoda Octavia 2013 год',
                text: 'Продам skoda octavia, пробег 105000, по корпусу есть мелкие царапины, в дтп не был',
                phoneNumber: '+78005553535',
                city: 'Москва',
            },
            {
                title: 'iphone X',
                text: 'Продам iphone X, новый, коробка не вскрывалась',
                phoneNumber: '+78005553535',
                city: 'Москва',
            },
            {
                title: '1',
                text: 'Продам iphone X, новый, коробка не вскрывалась',
                phoneNumber: '+78005553535',
                city: 'Москва',
            },
            {
                title: '2',
                text: 'Продам iphone X, новый, коробка не вскрывалась',
                phoneNumber: '+78005553535',
                city: 'Москва',
            }
        ]
    }

    addNewAd = (title, text, phoneNumber, city, e) => {
        e.preventDefault();
        const ads = [...this.state.ads];
        ads.unshift({title, text, phoneNumber, city});
        this.setState({ ads });
    }

    deleteAd = (index) => {
        const ads = [...this.state.ads];
        ads.splice(index, 1);
        this.setState({ ads });
    }

    render() { 
        const { ads } = this.state;
        return (
            <div className="board">
                <BoardForm addNewAd={this.addNewAd} />
                <AdsList deleteAd={this.deleteAd} ads={ads} />
            </div> 
        )
    }  
}
