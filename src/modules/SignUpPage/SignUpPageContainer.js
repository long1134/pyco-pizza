import React, { useState } from 'react';
import TextInput from "../../common/TextInput/TextInput"
import ButtonComponent from "../../common/Button/ButtonComponent"
import { useFormik } from 'formik';
import PopupLoading from "../../common/popupLoading/popupLoading"
import PopupError from "../../common/popup/Popup"
import { useSelector, useDispatch } from 'react-redux';
import * as Slice from "./Slice"

function SignUpPageContainer(props) {
    // console.log(props)
    const [isSubmit, setIsSubmit] = useState(false)
    const dispatch = useDispatch()
    const signUpReducers = useSelector(Slice.reducers)
    const [openPopup, setOpenPopup] = useState(false)
    const validate = values => {
        const errors = {}
        if (!values.email) {
            errors.email = "Required"
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
            errors.email = "Email is invalid"
        }
        if (!values.password) {
            errors.password = "Required"
        }
        else if (values.password.length < 8) {
            errors.password = "Pass word must have more 8 words"
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Required"
        }
        else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Password and confirm password must be the same"
        }
        if (!values.phone) {
            errors.phone = "Required"
        }
        else if (values.phone.length > 11 ||
            values.phone.length < 10 ||
            values.phone.substring(0, 1) !== "0") {
            errors.phone = "Your phone is invalid Viet Nam phone format"
        }
        if (!values.firstname) {
            errors.firstname = "Required"
        }
        if (!values.lastname) {
            errors.lastname = "Required"
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            firstname: "",
            lastname: ""
        },
        validate,
        onSubmit: values => {
            dispatch(Slice.actions.SignUp({
                email: values.email,
                password: values.password,
                phone: values.phone,
                firstname: values.firstname,
                lastname: values.lastname,
            }))
            setOpenPopup(true)
        },
    })
    function hanleIsSubmit() {
        setIsSubmit(true)
    }
    return (
        <div className="container">
            <div onClick={e => {
                window.location.reload(false)
                setOpenPopup(false)
            }} className={openPopup && signUpReducers.signUpSuccess ? "customize-popup-open" : "customize-popup-close"}>
                <PopupError message={"Sign Up success!!!"} />
            </div>
            <div className={openPopup && !signUpReducers.signUpSuccess && !signUpReducers.signUpFail ? "customize-popup-open" : "customize-popup-close"}>
                <PopupLoading />
            </div>
            <form className="login-container">
                <h2 className="mb-5">Sign Up</h2>
                <p className="color-red txt-center mb-2">{signUpReducers.messageError}</p>
                <TextInput
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email"
                    error={isSubmit ? formik.errors.email : ""}
                    label={<h3>Email</h3>} />
                <TextInput
                    type="new-password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={isSubmit ? formik.errors.password : ""}
                    placeholder="password"
                    label={<h3>Password</h3>} />
                <TextInput
                    type="password"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    placeholder="confirm password"
                    error={isSubmit ? formik.errors.confirmPassword : ""}
                    value={formik.values.confirmPassword}
                    label={<h3>Confirm password</h3>} />
                <TextInput
                    type="text"
                    name="phone"
                    onChange={formik.handleChange}
                    placeholder="Phone "
                    error={isSubmit ? formik.errors.phone : ""}
                    value={formik.values.phone}
                    label={<h3>Phone</h3>} />
                <div className="ds-flex ds-block-mobile">
                    <TextInput
                        type="text"
                        name="firstname"
                        onChange={formik.handleChange}
                        placeholder="First name"
                        value={formik.values.firstname}
                        error={isSubmit ? formik.errors.firstname : ""}
                        label={<h3>First name</h3>} />
                    <TextInput
                        className="ml-auto"
                        name="lastname"
                        type="text"
                        onChange={formik.handleChange}
                        error={isSubmit ? formik.errors.lastname : ""}
                        value={formik.values.lastname}
                        placeholder="Last name"
                        label={<h3>Last name</h3>} />
                </div>
                <ButtonComponent onClick={e => {
                    hanleIsSubmit()
                    formik.handleSubmit()
                }} className="button__component bg-red" content={"Sign up"} />
            </form>
        </div>
    );
}

export default SignUpPageContainer;
