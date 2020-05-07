//logo https://lh3.google.com/u/0/d/1OoPYOcT6WjM4x5aKiSK5RgZhUZ9e0_Ao=w1920-h902-iv1
import React from 'react';
import "./popup.scss"

function PopupComponent(props) {

    return (
        <div className="container bg-white popup-container">
            <h3 className="color-red">{props.message}</h3>
        </div>
    );
}
export default PopupComponent