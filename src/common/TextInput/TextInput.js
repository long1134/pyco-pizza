import React from 'react';
import "./_textinput__form.scss"

function TextInput(props) {
    return (
        <div className={props.className}>
            {props.label}
            <input className="texinput-form"
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                type={props.type}
                placeholder={props.placeholder} />
            <p className="mb-2 color-red">{props.error}</p>
        </div>
    );
}

export default TextInput;
