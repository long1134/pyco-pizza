import React from 'react';
import Header from "../../common/Header/Header"

function WrappedContainer(props) {
    console.log(props)
    return (
        <div>
            <Header {...props} />
            {props.children}
        </div>
    );
}

export default WrappedContainer;
