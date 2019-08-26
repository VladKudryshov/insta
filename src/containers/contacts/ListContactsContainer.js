import React, {Component} from 'react';
import DefaultContentOrder from "./DefaultContentOrder";

class ListContactsContainer extends Component {

    render() {
        const {address: {addresses}, actions: {chooseAddress}} = this.props;
        const listAddress = addresses.map(f => {
            if (f.default){
                chooseAddress(f);
            }
            return (
                <DefaultContentOrder contact = {f} chooseAddress = {chooseAddress} editAddress = {this.props.editAddress}/>
            )
        });

        return (
           <>
                <div className="list">
                    {listAddress}
                </div>
                <div className="actions">
                    <button className="btn-empty" onClick={this.props.handleContact}>+ Добавить новый адрес</button>
                </div>
            </>

        );
    }
}


export default ListContactsContainer;
