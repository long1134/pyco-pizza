import React from 'react';
import Header from "../../common/Header/Header"
import "./wrapped.scss"

function WrappedContainer(props) {
    return (
        <div>
            <Header {...props} />
            <div className="header-space"></div>
            {props.children}
        </div>
    );
}

export default WrappedContainer;
