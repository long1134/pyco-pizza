import React from 'react';
import "./scss/_button.scss"

function ButtonComponent(props) {
    return (
        <button
            type={props.type}
            className={props.className}
            onSubmit={e => {
                e.preventDefault()
                props.onSubmit()
            }}
            onClick={e => {
                e.preventDefault()
                props.onClick()
            }}>
            {props.content}
        </button>
    );
}

export default ButtonComponent;
