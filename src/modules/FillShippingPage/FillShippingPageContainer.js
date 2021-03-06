import React from 'react';
import FlowProgress from "../../common/FlowProgress/FlowProgress"
import "./FillShippingPage.scss"

function FillShippingPageContainer(props) {
    function HandleMethod() {
        props.history.push("login-carry-out")
        window.location.reload(false)
    }
    return (
        <div className="container">
            <FlowProgress type="step-1" />
            <h2 className="txt-center mb-4">ORDER METHOD</h2>
            <div className="order-method-container">
                <div className="grab-method cursor-pointer" onClick={e => HandleMethod()}>
                    <img src="https://food.grab.com/static/images/logo-grabfood-white.svg" alt={"grab"} />
                    <p className="txt-center">Free for orders over 100.000đ</p>
                </div>
                <h3 className="txt-center" >OR</h3>
                <div className="goviet-method cursor-pointer" onClick={e => HandleMethod()}>
                    <img className="ml-auto" src="https://www.go-viet.vn/wp-content/uploads/2018/06/GOVIET_LOGO_HORI_BW-copy-2.png" alt={"goviet"} />
                    <p className="txt-center">Charged from 3km and up</p>
                </div>
            </div>
        </div>
    );
}

export default FillShippingPageContainer;
