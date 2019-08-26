import React from 'react';

const DefaultContentOrder = ({contact, chooseAddress, editAddress}) => (
    <div className="item" key={contact.id}>
        <div className="next-radio-wrapper">
                        <span className="next-radio">
                          <input name="address" type="radio" value={contact.id} defaultChecked={contact.default}
                                 onChange={() => chooseAddress(contact)}/>
                        </span>
            <span className="next-radio-content">
                            <div>
                                <b>
                                    {contact.userName} {contact.userSecondName} {contact.userPhone}
                                </b>
                                <ul>
                                    {contact.city} {contact.street} {contact.house} {contact.flat}
                                </ul>
                            </div>
                {contact.default && <div className="default-address">Адрес по умолчанию</div>}
                <button className="btn-empty"
                        onClick={() => editAddress(contact)}>Редактировать</button>
                        </span>
        </div>
    </div>
);

export default DefaultContentOrder;

