import React, {Component} from 'react';

class NewContactContainer extends Component {

    state = {};

    componentDidMount(){
        this.setState(this.props.contact)
    }

    handleChangeForm = (e) => {
        const {target: {value, name}} = e;
        this.setState({[name]: value})
    };

    render() {

        return (

           <div className="new-contact">
                <p className="title">Контактная информация</p>
                <div className="cl2-rw1">
                    <input className="p1015" type="text" placeholder="Получатель" name="userName" defaultValue={this.state.userName} onChange={this.handleChangeForm}/>
                    <input className="p1015" type="text" placeholder="Телефон" name="userPhone" defaultValue={this.state.userPhone} onChange={this.handleChangeForm}/>
                </div>
                <p className="title">Адрес</p>
                <div className="cl2-rw1">
                    <input className="p1015" type="text" placeholder="Город" name="city" defaultValue={this.state.city} onChange={this.handleChangeForm}/>
                    <input className="p1015" type="text" placeholder="Улица" name="street" defaultValue={this.state.street} onChange={this.handleChangeForm}/>
                    <input className="p1015" type="text" placeholder="Дом" name="house" defaultValue={this.state.house} onChange={this.handleChangeForm}/>
                    <input className="p1015" type="text" placeholder="Квартира" name="flat" defaultValue={this.state.flat} onChange={this.handleChangeForm}/>
                </div>
                <div className="checkbox">
                    <input className="p1015" style={{width: '0px'}} type="checkbox" value="1" id="checkboxFiveInput" name="default"
                           defaultChecked={this.state.default} onChange={this.handleChangeForm}/>
                    <label htmlFor="checkboxFiveInput"/>
                    <span className="checkBoxPlho">Сделать адресом по умолчанию</span>
                </div>
                <div className="actions">
                    <button className="btn primary" onClick={()=>this.props.actions.editContactOrder(this.state)}>Подтвердить</button>
                    <button className="btn" onClick={this.props.handleContact}>Отмена</button>
                </div>
            </div>
        );
    }



}

export default NewContactContainer;
