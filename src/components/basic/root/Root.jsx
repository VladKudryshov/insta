import React from 'react';
import HeaderComponent from "../home/HeaderComponent";
import Notification from "../../notification/Notifications";


const Root = ({ children }) => (
  <div className="wrapper">
      <Notification/>
    <HeaderComponent/>
      {children}
    <footer/>
  </div>
);


Root.defaultProps = {
  children: null,
};

export default Root;
