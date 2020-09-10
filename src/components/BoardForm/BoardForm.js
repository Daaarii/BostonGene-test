import React, { Component } from 'react';

import './BoardForm.css';

export default class BoardForm extends Component {

    state = {
        title: '',
        text: '',
        phoneNumber: '+7',
        city: '',
        colorName: '',
        titleVal: false,
        phoneNumberVal: false,
    }

    onChangePhoneNumberHandler = (e) => {
        if (e.currentTarget.value.match(/\+79[0-9]{9}/g)) {
            this.setState({phoneNumber: e.currentTarget.value, phoneNumberVal: true});
        }
        else {
            this.setState({phoneNumber: e.currentTarget.value, phoneNumberVal: false});
        }
    }

    onChangeTitleHandler = (e) => {
        if (e.currentTarget.value.length > 0) {
            this.setState({title: e.currentTarget.value, titleVal: true});
        }
        else {
            this.setState({title: e.currentTarget.value, titleVal: false});
        }
    }

    onChangeHandler = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    render() {
        const { addNewAd } = this.props;
        const { title, text, phoneNumber, city, titleVal, phoneNumberVal } = this.state;
        return (
            <form className="board-form">
                <div>
                    <span>Заголовок:</span>
                    <input value={title} type="text" name="title" maxlength="140" style={this.state.titleVal ? null : {borderColor: 'red'}} onChange={this.onChangeTitleHandler} />
                </div>
                <div>
                    <span>Информация о товаре:</span>
                    <textarea value={text} name="text" maxlength="300" onChange={this.onChangeHandler} />
                </div>
                <div>
                    <span>Телефон:</span>
                    <input value={phoneNumber} type="text" name="phoneNumber" placeholder="Формат: +7 (ххх) ххх-хх-хх" style={this.state.phoneNumberVal ? null : {borderColor: 'red'}} onChange={this.onChangePhoneNumberHandler} />
                </div>
                <div>
                    <span>Выберите город:</span>
                    <div className="city-select">
                        <select value={city} name="city" onChange={this.onChangeHandler}>
                            <option value=''></option>
                            <option value='Москва'>
                                Москва
                            </option>
                            <option value='Санкт-Петербург'>
                                Санкт-Петербург
                            </option>
                            <option value='Казань'>
                                Казань
                            </option>
                            <option value='Нижний Новгород'>
                                Нижний Новгород
                            </option>
                        </select>
                    </div>
                </div>
                <div className="required">* - обязательное поле</div>
                <button disabled={!(titleVal && phoneNumberVal)} onClick={(e) => addNewAd(title, text, phoneNumber, city, e)}>Опубликовать объявление</button>
            </form>
        )
    }
}