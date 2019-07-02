import React, {Component} from 'react';

class ListContactsContainer extends Component {

    render() {
        const {address: {addresses}, actions: {chooseAddress}} = this.props;
        const listAddress = addresses.map(f => {
            if (f.default){
                chooseAddress(f);
            }
            return (
                <div className="item" key={f.id}>
                    <div className="next-radio-wrapper">
                        <span className="next-radio">
                          <input name="address" type="radio" value={f.id} defaultChecked={f.default}
                                 onChange={() => chooseAddress(f)}/>
                        </span>
                        <span className="next-radio-content">
                            <div>
                                <b>
                                    {f.userName} {f.userSecondName} {f.userPhone}
                                </b>
                                <ul>
                                    {f.city} {f.street} {f.house} {f.flat}
                                </ul>
                            </div>
                            {f.default && <div className="default-address">Адрес по умолчанию</div>}
                            <button className="btn-empty"
                                    onClick={() => this.props.editAddress(f)}>Редактировать</button>
                        </span>
                    </div>
                </div>
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
