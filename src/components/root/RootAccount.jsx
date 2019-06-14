import React from 'react';
import AccountComponent from "../AccountComponent";


const RootAccount = ({ children }) => (
  <div>
    <AccountComponent/>
    {children}
  </div>
);


RootAccount.defaultProps = {
  children: null,
};

export default RootAccount;
