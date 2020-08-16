import React from 'react';
import "./SideBarOption.css";

const SidebarOption = ({option,Icon}) => {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        </div>
    );
};

export default SidebarOption;