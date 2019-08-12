import React from 'react';


const ToolTip = ({children, tooltipMessage}) => (
    <li className="category">
        {children}
        <div className="tooltip">{tooltipMessage}</div>
    </li>
);


ToolTip.defaultProps = {
    children: null,
};

export default ToolTip;
