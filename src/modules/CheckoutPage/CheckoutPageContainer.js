import React from 'react';
import FlowProgress from "../../common/FlowProgress/FlowProgress"
import CartComponent from "../../common/CartComponent/CartContainer"
import "./CheckoutPage.scss"

function CheckoutPageContainer(props) {
    console.log(props)
    return (
        <div className="container">
            <FlowProgress type="step-4" />
            <CartComponent type="checkout" {...props} />
        </div>
    );
}

export default CheckoutPageContainer;
