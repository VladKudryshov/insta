import React from 'react';


const ToolTip = ({children, tooltipMessage}) => (
    <div className="tooltip-container">
        {children}
        <div className="tooltip">{tooltipMessage}</div>
    </div>
);


ToolTip.defaultProps = {
    children: null,
};

export default ToolTip;
