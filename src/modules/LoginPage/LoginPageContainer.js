import React, { useState } from 'react';
import TextInput from "../../common/TextInput/TextInput"
import ButtonComponent from "../../common/Button/ButtonComponent"
import { FaUserAlt, FaLock } from "react-icons/fa"
import { Link } from 'react-router-dom';
import FlowProgress from "../../common/FlowProgress/FlowProgress"
import PopupLoading from "../../common/popupLoading/popupLoading"
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Slice from "./Slice"
import * as Coockie from "js-cookie"
import "./LoginPage.scss"

function LoginPageContainer(props) {
    const [isSubmit, setIsSubmit] = useState(false)
    const dispatch = useDispatch();
    const loginReducers = useSelector(Slice.reducers)
    const validate = values => {
        const errors = {}
        if (!values.emailorphone) {
            errors.emailorphone = "Required"
        }
        else if (!/[^a-z0-9]/g.test(values.emailorphone)) {
            if (values.emailorphone.length > 11 ||
                values.emailorphone.length < 10 ||
                values.emailorphone.substring(0, 1) !== "0") {
                errors.emailorphone = "Your phone is invalid Viet Nam phone format"
            }
        }
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.emailorphone)) {
            errors.emailorphone = "Email is invalid"
        }
        if (!values.password) {
            errors.password = "Required"
        }
        else if (values.password.length < 8) {
            errors.password = "Pass word must have more 8 words"
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            emailorphone: "",
            password: ""
        },
        validate,
        onSubmit: values => {
            console.log(formik.values)
            dispatch(Slice.actions.Login(formik.values))
        },
    })
    if (Coockie.get("token")) {
        if (props.type === "login-carry-out") {
            props.history.push("/order-info")
            window.location.reload(false);
        }
        else {
            props.history.push("/product")
            window.location.reload(false);
        }
    }
    function handleSubmit() {
        setIsSubmit(true)
    }
    return (
        <div>
            <div className={loginReducers.loading ? "customize-popup-open" : "customize-popup-close"}>
                <PopupLoading />
            </div>
            {props.type === "login-carry-out" ?
                <FlowProgress type="step-2" /> : ""}
            <div className="container">
                <form className="login-container" onSubmit={formik.handleSubmit}>
                    <h2 className="mb-5">Sign in</h2>
                    <p className="color-red txt-center mb-2 fs-15">{loginReducers.messageError}</p>
                    <TextInput
                        type="text"
                        name="emailorphone"
                        value={formik.values.emailorphone}
                        onChange={formik.handleChange}
                        placeholder="Email or phone"
                        error={isSubmit ? formik.errors.emailorphone : ""}
                        label={<FaUserAlt fontSize="20" />} />
                    <TextInput
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={isSubmit ? formik.errors.password : ""}
                        placeholder="password"
                        label={<FaLock fontSize="20" />} />
                    {props.type === "login-carry-out" ?
                        <div className="ds-flex login-carry-btns">
                            <ButtonComponent className="button__component bg-red width-130" content="CONTINUE" onClick={e => {
                                handleSubmit()
                                formik.handleSubmit()
                            }} />
                            <ButtonComponent className="button__component bg-gey width-130" content="BACK" onClick={e => props.history.push("/shipping")} />
                        </div> :
                        <ButtonComponent type="submit" onSubmit={formik.handleSubmit} onClick={e => {
                            handleSubmit()
                            formik.handleSubmit()
                        }} className="button__component bg-red" content={"Sign in"} />}
                    <div className="ds-flex">
                        <p className="mr-1">Don't have an account ? </p>
                        <Link to="/signup"> Sign up</Link>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default LoginPageContainer;
