//logo https://lh3.google.com/u/0/d/1OoPYOcT6WjM4x5aKiSK5RgZhUZ9e0_Ao=w1920-h902-iv1
import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";

function PopupLoadingComponent(props) {

    return (
        <div >
            <BeatLoader color={"#ffffff"} loading={true} />
        </div>
    );
}
export default PopupLoadingComponent