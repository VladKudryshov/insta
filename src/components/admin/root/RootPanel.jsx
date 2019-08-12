import React from 'react';
import AdminHeaderComponent from "../AdminHeaderComponent";
import RootAdminPanel from "./RootAdminPanel";


const RootPanel = ({ children }) => (
  <div className="wrapper">
    <AdminHeaderComponent/>
    <RootAdminPanel children={children}/>
  </div>
);


RootPanel.defaultProps = {
  children: null,
};

export default RootPanel;
