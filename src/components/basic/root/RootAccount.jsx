import React from 'react';
import AccountComponent from "../account/AccountBlockMenu";


const RootAccount = ({ children }) => (
  <div className="wrapper auto1fr">
    <AccountComponent/>
    {children}
  </div>
);


RootAccount.defaultProps = {
  children: null,
};

export default RootAccount;
