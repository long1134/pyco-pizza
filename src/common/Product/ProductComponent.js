import React, { useState } from 'react';
import ButtonComponent from "../Button/ButtonComponent"
import { AiOutlineArrowRight } from "react-icons/ai"
import PopupMessage from "../popup/Popup"
import "./productComponent.scss"

function ProductComponent(props) {
    console.log(props)
    const { imgUrl, name, prices, desc } = props
    const [openPopup, setOpenPopup] = useState(false)

    function AddToCartProduct() {
        if (props.AddToCart) {
            props.AddToCart({
                categoryId: props.categoryId,
                product: {
                    price: prices[0].price,
                    name: name
                }
            })
        }
    }
    return (
        <div>
            <div onClick={e => setOpenPopup(false)} className={openPopup && props.AddToCart ? "customize-popup-open" : "customize-popup-close"}>
                <PopupMessage message="Order success" />
            </div>
            <div className={"product-item " + (!props.AddToCart ? "pizza-height" : "porduct-height")}
                onClick={e => {
                    setOpenPopup(true)
                    AddToCartProduct()
                }}>
                <img src={imgUrl} alt={name} className={props.categoryId === "2" ? "img-contain" : ""} />
                <div>
                    <div className={prices.length === 1 ? "content-container " : "content-container-pizza"}>
                        <h3>{name}</h3>
                        <p className="mb-1 fs-15">{desc}</p>
                        {prices ?
                            prices.map((price, index) => (
                                <p key={index} className=" fs-15">{price.name} : <b>{price.price} đ</b></p>
                            )) : ""}
                    </div>
                    <ButtonComponent className="product-btn mt-3" onClick={e => { }} content={<p>Add to cart <AiOutlineArrowRight /></p>} />
                </div>
            </div>
        </div>);
}

export default ProductComponent;
