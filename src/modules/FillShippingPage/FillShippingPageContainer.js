import React from 'react';
import FlowProgress from "../../common/FlowProgress/FlowProgress"
import "./FillShippingPage.scss"

function FillShippingPageContainer(props) {
    function HandleMethod() {
        props.history.push("login-carry-out")
    }
    console.log(props)
    return (
        <div className="container">
            <FlowProgress type="step-1" />
            <h2 className="txt-center mb-4">ORDER METHOD</h2>
            <div className="order-method-container">
                <div className="grab-method cursor-pointer" onClick={e => HandleMethod()}>
                    <img src="https://food.grab.com/static/images/logo-grabfood-white.svg" />
                    <p className="txt-center">Miễn phí cho đơn hàng trên 1000đ</p>
                </div>
                <h3 className="txt-center" >OR</h3>
                <div className="goviet-method cursor-pointer" onClick={e => HandleMethod()}>
                    <img className="ml-auto" src="https://www.go-viet.vn/wp-content/uploads/2018/06/GOVIET_LOGO_HORI_BW-copy-2.png" />
                    <p className="txt-center">Tính phí từ 3km trở lên</p>
                </div>
            </div>
        </div>
    );
}

export default FillShippingPageContainer;
