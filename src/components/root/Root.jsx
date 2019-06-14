import React from 'react';
import HeaderComponent from "../HeaderComponent";


const Root = ({ children }) => (
  <div className="wrapper">
    <HeaderComponent/>
    {children}
    <footer/>
  </div>
);


Root.defaultProps = {
  children: null,
};

export default Root;
