import React, {Component} from 'react';
import {userService} from "../../services/userService";
import {bindActionCreators} from "redux";
import {editContactOrder, loadDataById} from "../../actions/action";
import connect from "react-redux/es/connect/connect";

class NewContactContainer extends Component {

    render() {

        return (

            this.props.visible && <div className="new-contact">
                    <p className="title">Контактная информация</p>
                    <div className="cl2-rw1">
                        <input type="text" placeholder="Получатель" defaultValue={this.props.contact.userName}/>
                        <input type="text" placeholder="Телефон" defaultValue={this.props.contact.userPhone}/>
                    </div>
                    <p className="title">Адрес</p>
                    <div className="cl2-rw1">
                        <input type="text" placeholder="Город" defaultValue={this.props.contact.city}/>
                        <input type="text" placeholder="Улица" defaultValue={this.props.contact.street}/>
                        <input type="text" placeholder="Дом" defaultValue={this.props.contact.house}/>
                        <input type="text" placeholder="Квартира" defaultValue={this.props.contact.flat}/>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" value="1" id="checkboxFiveInput" name="" defaultChecked={this.props.contact.default}/>
                        <label htmlFor="checkboxFiveInput"/>
                        <span className="checkBoxPlho">Сделать адресом по умолчанию</span>
                    </div>
                    <div className="actions">
                        <button className="btn primary" onClick={this.props.editContactOrder}>Подтвердить</button>
                        <button className="btn" onClick={this.props.handleContact}>Отмена</button>
                    </div>
                </div>
        );
    }


}

export default NewContactContainer;
