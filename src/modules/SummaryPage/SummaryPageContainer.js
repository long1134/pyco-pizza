import React from 'react';
import CartContainer from "../../common/CartComponent/CartContainer"
// import "../../../scss/index.scss"

function SummaryPageContainer(props) {
    return (
        <CartContainer type="summary" {...props} />
    );
}

export default SummaryPageContainer;
