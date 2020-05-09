import React, { useEffect, useState } from 'react';
// import TextInput from "../../Common/TextInput"
// import ButtonComponent from "../../Common/ButtonComponent"
import ButtonComponent from "../Button/ButtonComponent"
import { TiTimes } from "react-icons/ti"
import CartItem from "./CartItemDetail"
import PopupError from "../popup/Popup"
import { useSelector, useDispatch } from 'react-redux';
import * as Slice from "./Slice"
import Popup from "reactjs-popup";
import "./scss/summarypage.scss"
// import "../../../scss/index.scss"

function SummaryPageContainer(props) {
    const [openPopupError, setOpenPopupError] = useState(false)
    const [openPopup, setOpenPopup] = useState(false)
    const dispatch = useDispatch()
    const cartReducer = useSelector(Slice.reducers)
    const products = cartReducer.products
    const classNameContainer = "container bg-white p-0 " + (props.type === "summary" || props.type === "checkout" ? "cart-container" : "cart-container-detail " + (props.status === "open" ? "active" : ""))
    let total = cartReducer.total
    // console.log(products)

    useEffect(() => {
        dispatch(Slice.actions.InitData())
    }, [])

    function HandleCheckout() {
        if (props.type !== "checkout") {
            if (cartReducer.total)
                props.history.push("/shipping")
            else {
                setOpenPopupError(true)
            }
        }
        else if (props.type === "checkout") {
            if (products.length !== 0)
                setOpenPopup(true)
            else {
                setOpenPopupError(true)
            }
        }
    }

    function HandleQuantity({ number, index, type }) {
        dispatch(Slice.actions.HandleQuantity({ number, index, type }))
    }

    function RemoveFromCart(index) {
        dispatch(Slice.actions.RemoveFromCart(index))
    }
    return (
        <div className={classNameContainer}>
            <Popup modal
                open={openPopupError}
                onClose={e => {
                    setOpenPopupError(false)
                    props.history.push("/product")
                }}
                closeOnDocumentClick position="right center">
                {close => (
                    <PopupError message={"Your cart can't be empty"} onClose={close} />
                )}
            </Popup>
            <Popup modal
                open={openPopup}
                onClose={e => {
                    setOpenPopup(false)
                    dispatch(Slice.actions.DeleteData())
                    props.history.push("/product")
                }}
                closeOnDocumentClick position="right center">
                {close => (
                    <PopupError message={"Ordering success!!!"} onClose={close} />
                )}
            </Popup>
            <div className="cart-container">
                <div className="color-red mb-2 border-line-dotted ds-flex">
                    <h1>Order detail</h1>
                    <TiTimes className="ml-auto color-black icon-mobile cursor-pointer" fontSize="30" onClick={e => props.onClick()} />
                </div>
                <div className="cart-item-container">
                    {products.map((product, index) => (
                        <CartItem
                            index={index}
                            RemoveFromCart={RemoveFromCart}
                            HandleQuantity={HandleQuantity}
                            key={index}
                            type={props.type}
                            product={product} />
                    ))}
                </div>
            </div>
            <div className="ds-flex p-1 mb-5">
                <h1 className=" color-red">Total : </h1>
                <h1 className="ml-auto color-red">{total.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')} Đ</h1>
            </div>
            <div className="cart-button-container">
                <ButtonComponent className="cart-button" content="Checkout" onClick={e => HandleCheckout()} />
            </div>
        </div>
    );
}

export default SummaryPageContainer;
