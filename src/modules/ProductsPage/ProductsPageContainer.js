import React, { useState, useEffect } from 'react';
import ButtonComponent from "../../common/Button/ButtonComponent"
import ProductComponent from "../../common/Product/ProductComponent"
import ProductDetailComponent from "../../modules/ProductDetail/ProductsPageDetailContainer"
import CartContainer from "../../common/CartComponent/CartContainer"
import PopupLoading from "../../common/popupLoading/popupLoading"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { FaShoppingCart } from "react-icons/fa"
import { IoIosArrowUp } from "react-icons/io"
import TinySlider from "tiny-slider-react";
import Popup from "reactjs-popup";
import { useSelector, useDispatch } from 'react-redux';
import * as Slice from "./Slice"
import * as cartSlice from "../../common/CartComponent/Slice"
import PopupMessage from "../../common/popup/Popup"
import "./productpage.scss"

function ProductPageContainer(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Slice.actions.InitData(props.match.params))
    }, [])
    const [popupLoading, setPopupLoading] = useState(false)
    const [popupMesage, setPopupMesage] = useState(false)
    const urlParams = props.match.params[0].toLowerCase().substring(1)
    const params = ["spaghetti", "drinks", "salad"]
    const slidersName = ["pizza", "spaghetti", "drinks", "salad"]
    const setting = {
        mouseDrag: true,
        loop: true,
        nav: false,
        responsive: {
            765: {
                items: 4,
            },
            350: {
                items: 2,
            },
        },
        items: 1,
        controls: false,
        touch: true,
        gutter: 0
    }
    var tsGlobal = ""
    const [statusCartDetail, setStatusCartDetail] = useState("close");
    const productsReducer = useSelector(Slice.reducers);
    const cartReducer = useSelector(cartSlice.reducers)
    var total = 0
    for (let i in cartReducer.products) {
        if (cartReducer.products[i].pizza)
            total += cartReducer.products[i].pizza.quantity
        else {
            total += cartReducer.products[i].product.quantity
        }
    }


    function HandleStatusCartDetail() {
        setStatusCartDetail(statusCartDetail === "open" ? "close" : "open")
    }

    function handleCheckout() {
        console.log(total === 0 && popupMesage)
        if (total === 0) {
            setPopupMesage(true)
        }
        else {
            props.history.push("/shipping")
        }
    }

    function AddToCart(data) {
        dispatch(cartSlice.actions.AddToCart({
            categoryId: data.categoryId,
            product: {
                name: data.product.name,
                price: data.product.price,
                quantity: 1,
            },
        }))
    }
    return (
        <div className="container">
            <div className={productsReducer.products.length === 0 || popupLoading ? "customize-popup-open" : "customize-popup-close"}>
                <PopupLoading />
            </div>
            <TinySlider settings={setting} ref={ts => tsGlobal = ts}>
                {slidersName.map((slide, index) => (
                    <div onClick={e => {
                        setPopupLoading(true)
                        props.history.push("/product/" + slide)
                        window.location.reload(false)
                    }}
                        className="tns-item-slider-container cursor-pointer"
                        key={index}>
                        <div className={urlParams === slide || (slide === "pizza" && params.indexOf(urlParams) === -1) ?
                            "tns-item-slider-active" :
                            "tns-item-slider"}>
                            {slide}
                        </div>
                    </div>))}
            </TinySlider>
            <button className="button-pre" onClick={e => tsGlobal.slider.goTo("prev")}>
                <IoIosArrowBack />
            </button>
            <button className="button-next" onClick={e => tsGlobal.slider.goTo("next")}>
                <IoIosArrowForward />
            </button>
            <div className="ds-grid grid-tpl-col-3-1 mt-3">
                <div className="ds-grid grid-tpl-col-1-1 row-gap-20">
                    {params.indexOf(urlParams) === -1 ?
                        productsReducer.products.map((product, index) => (
                            <Popup key={index}
                                trigger={<div className="ProductComponent-container">
                                    <ProductComponent {...product} /></div>}
                                modal
                                closeOnDocumentClick position="right">
                                {close => (
                                    <ProductDetailComponent product={{ ...product }} onClose={close} />
                                )}
                            </Popup>
                        ))
                        : productsReducer.products.map((product, index) => (
                            <ProductComponent key={index} AddToCart={AddToCart} {...product} />))}
                </div>
                <CartContainer onClick={HandleStatusCartDetail} type="detail" status={statusCartDetail} {...props} />
            </div>
            <div className={total === 0 && popupMesage ? "customize-popup-open" : "customize-popup-close"} onClick={e => setPopupMesage(false)}>
                <PopupMessage message={"Your cart can'nt be empty"} />
            </div>
            <div className="snack-bar">
                <div className="container ds-grid snack-bar-content">
                    <div className="">
                        <div className="ps-relative mt-2">
                            <FaShoppingCart size={15} color="#0B2030" />
                            <div className="count bg-red">{total}</div>
                        </div>
                        <div className="ds-flex">
                            <h3 className="mr-2">Total : </h3>
                            <h3 >{cartReducer.total.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')} đ</h3>
                        </div>
                    </div>
                    <div onClick={HandleStatusCartDetail}
                        className="snack-bar-arrow-icon txt-center cursor-pointer">
                        <img src={statusCartDetail === "close" ?
                            "https://image.flaticon.com/icons/png/128/36/36905.png" :
                            "https://image.flaticon.com/icons/png/128/36/36657.png"} />
                    </div>
                    <ButtonComponent onClick={handleCheckout} content="Checkout" className="snack-bar-btn cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default ProductPageContainer;
