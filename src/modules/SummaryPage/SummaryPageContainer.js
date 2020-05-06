import React from 'react';
// import TextInput from "../../Common/TextInput"
// import ButtonComponent from "../../Common/ButtonComponent"
import { FaUserAlt, FaLock } from "react-icons/fa"
import { Link } from 'react-router-dom';
import ButtonComponent from "../../common/Button/ButtonComponent"
import CartContainer from "../../common/CartComponent/CartContainer"
// import "../../../scss/index.scss"

function SummaryPageContainer(props) {
    console.log(props)
    return (
        <CartContainer type="summary" {...props} />
    );
}

export default SummaryPageContainer;
