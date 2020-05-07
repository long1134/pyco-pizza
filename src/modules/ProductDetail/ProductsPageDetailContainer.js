import React, { useState } from 'react';
import ButtonComponent from "../../common/Button/ButtonComponent"
import { useDispatch } from 'react-redux';
import * as cartReducers from "../../common/CartComponent/Slice"
import "./productpagedetail.scss"

function ProductPageDetail(props) {
    const cheeses = [
        { name: "Default", price: 0 },
        { name: "Extra Cheese", price: 10000 },
        { name: "Double Cheese", price: 20000 },
        { name: "Triple Cheese", price: 30000 }
    ]
    const dispatch = useDispatch()
    const [product, setProduct] = useState({
        size: "Medium - 9 inch",
        crust: "Hand Tossed",
        cheese: { name: "Default", price: 0 },
    })
    const { name, imgUrl, desc, prices } = props.product
    const [price, setPrice] = useState(prices[1].price)

    function HandleRadioSize(e) {
        const currentPrice = prices[prices.findIndex(priceItem => priceItem.name === product.size)].price
        setProduct({ ...product, [e.name]: prices[e.value].name })
        setPrice(price - currentPrice + prices[e.value].price)
    }
    function HandleRadioCrust(e) {
        setProduct({ ...product, [e.name]: e.value })
    }
    function HandleRadioCheese(e) {
        setPrice(price - product.cheese.price + cheeses[e.value].price)
        setProduct({ ...product, [e.name]: cheeses[e.value] })
    }
    function AddToCart() {
        dispatch(cartReducers.actions.AddToCart({
            categoryId: 0,
            pizza: {
                name,
                price: price - product.cheese.price,
                quantity: 1,
                crust: product.crust,
                size: product.size
            },
            cheese: product.cheese
        }))
    }

    return (
        <div className="container bg-product-detail">
            <div className="product-detail-container container">
                <div className="response-mobile">
                    <h2>{name}</h2>
                    <p className="mb-2">{desc}</p>
                    <img src={imgUrl} alt={name} />
                    <h3 className="txt-center">{
                        new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</h3>
                </div>
                <div className="response-mobile">
                    <h2>Choose pizza size</h2>
                    <form className="form-radido" name="size" onChange={e => HandleRadioSize(e.target)}>
                        <div className="raio-container">
                            <input id="pizzza-size-1"
                                onChange={e => { }}
                                className="radio-custom"
                                name="size"
                                type="radio"
                                value={0}
                                checked={product.size === "Small - 7 inch"} />
                            <label htmlFor="pizzza-size-1" className="radio-custom-label">Small - 7 inch</label>
                        </div>
                        <div className="raio-container">
                            <input id="pizzza-size-2"
                                onChange={e => { }}
                                className="radio-custom"
                                name="size"
                                type="radio"
                                value={1}
                                checked={product.size === "Medium - 9 inch"} />
                            <label htmlFor="pizzza-size-2" className="radio-custom-label">Medium - 9 inch</label>
                        </div>
                        <div className="raio-container">
                            <input id="pizzza-size-3"
                                onChange={e => { }}
                                className="radio-custom"
                                name="size"
                                type="radio"
                                value={2}
                                checked={product.size === "Large - 12 inch"} />
                            <label htmlFor="pizzza-size-3" className="radio-custom-label">Large - 12 inch</label>
                        </div>
                    </form>
                    <h2>Choose pizza crust</h2>
                    <form className="form-radido" onChange={e => HandleRadioCrust(e.target)}>
                        <div className="raio-container">
                            <input id="pizzza-crust-1"
                                onChange={e => { }}
                                className="radio-custom"
                                name="crust"
                                type="radio"
                                value="Thin Crust"
                                checked={product.crust === "Thin Crust"} />
                            <label htmlFor="pizzza-crust-1" className="radio-custom-label">Thin Crust</label>
                        </div>
                        <div className="raio-container">
                            <input id="pizzza-crust-2"
                                onChange={e => { }}
                                className="radio-custom"
                                name="crust"
                                type="radio"
                                value="Hand Tossed"
                                checked={product.crust === "Hand Tossed"} />
                            <label htmlFor="pizzza-crust-2" className="radio-custom-label">Hand Tossed</label>
                        </div>
                        <div className="raio-container">
                            <input id="pizzza-crust-3"
                                onChange={e => { }}
                                className="radio-custom"
                                name="crust"
                                type="radio"
                                value="New York Crust"
                                checked={product.crust === "New York Crust"} />
                            <label htmlFor="pizzza-crust-3" className="radio-custom-label">New York Crust</label>
                        </div>
                    </form>
                    <h2>Options</h2>
                    <form className="mb-4" onChange={e => HandleRadioCheese(e.target)}>
                        <div className="raio-option-container">
                            <input id="pizzza-otpion-0"
                                onChange={e => { }}
                                className="radio-custom"
                                name="cheese"
                                type="radio"
                                value="0"
                                checked={product.cheese.name === "Default"} />
                            <label htmlFor="pizzza-otpion-0" className="radio-custom-label option">Default</label>
                            <h3>0.000đ</h3>
                        </div>
                        <div className="raio-option-container">
                            <input id="pizzza-otpion-1"
                                onChange={e => { }}
                                className="radio-custom"
                                name="cheese"
                                type="radio"
                                value="1" checked={product.cheese.name === "Extra Cheese"} />
                            <label htmlFor="pizzza-otpion-1" className="radio-custom-label option">Extra Cheese</label>
                            <h3>10.000đ</h3>
                        </div>
                        <div className="raio-option-container">
                            <input id="pizzza-otpion-2"
                                onChange={e => { }}
                                className="radio-custom"
                                name="cheese"
                                type="radio"
                                value="2"
                                checked={product.cheese.name === "Double Cheese"} />
                            <label htmlFor="pizzza-otpion-2" className="radio-custom-label option">Double Cheese</label>
                            <h3>20.000đ</h3>
                        </div>
                        <div className="raio-option-container">
                            <input id="pizzza-otpion-3"
                                onChange={e => { }}
                                className="radio-custom"
                                name="cheese"
                                type="radio"
                                value="3"
                                checked={product.cheese.name === "Triple Cheese"} />
                            <label htmlFor="pizzza-otpion-3" className="radio-custom-label option">Triple Cheese</label>
                            <h3>30.000đ</h3>
                        </div>
                    </form>
                    <ButtonComponent onClick={e => {
                        AddToCart()
                        props.onClose()
                    }} content="Order" className="product-detail-btn cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default ProductPageDetail;
