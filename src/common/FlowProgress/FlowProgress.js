//logo https://lh3.google.com/u/0/d/1OoPYOcT6WjM4x5aKiSK5RgZhUZ9e0_Ao=w1920-h902-iv1
import React from 'react';
import "./FlowProgress.scss"

function FlowProgress(props) {
    const activeStep1 = props.type === "step-1" ? "active" : ""
    const activeStep2 = props.type === "step-2" ? "active" : ""
    const activeStep3 = props.type === "step-3" ? "active" : ""
    const activeStep4 = props.type === "step-4" ? "active" : ""
    return (
        <div className={"FlowProgress " + props.type}>
            <h3 className={"step-desktop " + activeStep1}>01. ORDER METHOD</h3>
            <h3 className={"step-mobile " + activeStep1} >01</h3>
            <h3 className={"step-desktop " + activeStep2} >02. SIGN IN</h3>
            <h3 className={"step-mobile " + activeStep2}>02</h3>
            <h3 className={"step-desktop " + activeStep3}>03. ORDER INFORMATION</h3>
            <h3 className={"step-mobile " + activeStep3}>03</h3>
            <h3 className={"step-desktop " + activeStep4}>04. CHECK OUT INFORMATION </h3>
            <h3 className={"step-mobile " + activeStep4}>04</h3>
        </div>
    );
}

export default FlowProgress;                