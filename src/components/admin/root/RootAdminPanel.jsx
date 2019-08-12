import React from 'react';
import AdminPanelComponent from "../AdminPanelComponent";


const RootAdminPanel = ({children}) => (
    <div className="wrapper auto1fr">
        <AdminPanelComponent/>
        {children}
    </div>
);


RootAdminPanel.defaultProps = {
    children: null,
};

export default RootAdminPanel;
