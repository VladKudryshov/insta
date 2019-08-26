import React from "react";

const Address = ({address, editAddress}) => (
    <div className="item">
        <div className="next-radio-wrapper">
            <span className="next-radio-content">
                <div>
                    <b>
                        {address.userName} {address.userSecondName} {address.userPhone}
                    </b>
                    <ul>
                        {address.city} {address.street} {address.house} {address.flat}
                    </ul>
                </div>
                {address.default && <div className="default-address">Адрес по умолчанию</div>}
                <button className="btn-empty"
                        onClick={() => editAddress(address)}>Редактировать</button>
            </span>
        </div>
    </div>
);


export default Address