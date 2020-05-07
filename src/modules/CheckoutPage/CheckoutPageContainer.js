import React from 'react';
import FlowProgress from "../../common/FlowProgress/FlowProgress"
import CartComponent from "../../common/CartComponent/CartContainer"
import { AiOutlineArrowLeft } from "react-icons/ai"
import "./CheckoutPage.scss"
import * as Coockie from "js-cookie"

function CheckoutPageContainer(props) {
    const orderInfo = Coockie.get("orderInfo") ? JSON.parse(Coockie.get("orderInfo")) : {}
    return (
        <div className="container">
            <FlowProgress type="step-4" />
            <div className="container bg-white mb-2 p-2">
                <div className="ds-flex">
                    <AiOutlineArrowLeft className="color-red icon cursor-pointer" onClick={e => props.history.push("/order-info")} />
                    <h2 className="color-red mb-1"> User information : </h2>
                </div>
                <p><span className="fw-bold">Name :</span> {orderInfo.name}</p>
                <p><span className="fw-bold">Phone :</span>  {orderInfo.phone}</p>
                <p><span className="fw-bold">Address :</span>  {orderInfo.address}</p>
            </div>
            <CartComponent type="checkout" {...props} />
        </div>
    );
}

export default CheckoutPageContainer;
