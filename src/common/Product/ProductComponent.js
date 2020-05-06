import React from 'react';
import ButtonComponent from "../Button/ButtonComponent"
import { AiOutlineArrowRight } from "react-icons/ai"
import "./productComponent.scss"

function ProductComponent(props) {
    // console.log(props)
    const { imgUrl, name, prices, desc } = props
    console.log(props)

    function AddToCartProduct() {
        console.log({
            categoryId: props.categoryId,
            product: {
                price: prices[0].price,
                name: name
            }
        })
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
        <div className={"product-item " + (!props.AddToCart ? "pizza-height" : "porduct-height")} onClick={e => AddToCartProduct()}>
            <img src={imgUrl} className={props.categoryId === "2" ? "img-contain" : ""} />
            <div>
                <div className={prices.length === 1 ? "content-container " : "content-container-pizza"}>
                    <h3>{name}</h3>
                    <p className="mb-1">{desc}</p>
                    {prices ?
                        prices.map((price, index) => (
                            <p key={index}>{price.name} : {price.price} đ</p>
                        )) : ""}
                </div>
                <ButtonComponent className="product-btn mt-3" onClick={e => { }} content={<p>Add to cart <AiOutlineArrowRight /></p>} />
            </div>
        </div>
    );
}

export default ProductComponent;
