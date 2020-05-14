import React, { useState } from 'react';
import FlowProgress from "../../common/FlowProgress/FlowProgress"
import TextInput from "../../common/TextInput/TextInput"
import ButtonComponent from "../../common/Button/ButtonComponent"
import { useFormik } from 'formik';
import * as Coockie from "js-cookie"
import "./FillOrderInfoPage.scss"

function FillOrderInfoPageContainer(props) {
    const [isSubmit, setIsSubmit] = useState(false)
    const userInfo = Coockie.get("user") ? JSON.parse(Coockie.get("user")) : {}
    const validate = values => {
        const errors = {}
        if (!values.phone) {
            errors.phone = "Required"
        }
        else if (!/[^a-z0-9]/g.test(values.phone)) {
            if (values.phone.length > 11 ||
                values.phone.length < 10 ||
                values.phone.substring(0, 1) !== "0") {
                errors.phone = "Your phone is invalid Viet Nam phone format"
            }
        }
        if (!values.address) {
            errors.address = "Required"
        }
        if (!values.name) {
            errors.name = "Required"
        }
        // console.log(errors)
        return errors
    }

    const orderInfo = Coockie.get("orderInfo") ? JSON.parse(Coockie.get("orderInfo")) : {}

    const formik = useFormik({
        initialValues: {
            address: orderInfo.address,
            phone: userInfo.phone,
            name: userInfo.firstname + " " + userInfo.lastname
        },
        validate,
        onSubmit: values => {
            Coockie.set("orderInfo", JSON.stringify(values), { expires: 1 / 24 })
            props.history.push("/checkout")
        },
    })
    function handleSubmit() {
        // props.history.push("/checkout")
        setIsSubmit(true)
    }
    return (
        <div className="container">
            <FlowProgress type="step-3" />
            <h2 className="txt-center mb-4" >DELIVERY</h2>
            <form className="order-info-container">
                <TextInput label={<h4>Address</h4>}
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={isSubmit ? formik.errors.address : ""}
                    placeholder="Address" />
                <TextInput label={<h4>Phone</h4>}
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={isSubmit ? formik.errors.phone : ""}
                    placeholder="Phone" />
                <TextInput label={<h4>Name</h4>}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={isSubmit ? formik.errors.name : ""}
                    placeholder="Name" />
                <div className="ds-flex step-3-btns">
                    <ButtonComponent
                        className="button__component bg-red width-130 mt-0"
                        content="CONTINUE"
                        onClick={e => {
                            handleSubmit()
                            formik.handleSubmit()
                        }} />
                    <ButtonComponent
                        className="button__component bg-gey width-130"
                        content="BACK"
                        onClick={e => props.history.push("/shipping")} />
                </div>
            </form>

        </div>
    );
}

export default FillOrderInfoPageContainer;
