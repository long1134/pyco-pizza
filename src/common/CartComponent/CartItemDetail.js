import React from 'react';
// import ButtonComponent from "../../Common/ButtonComponent"
import { BsPlus } from "react-icons/bs"
import { AiOutlineMinus } from "react-icons/ai"
// import "../../../scss/index.scss"

function CartItemDetail(props) {
    // console.log(props)
    const { pizza, cheese } = props.product
    let product = !props.product.categoryId ? { ...pizza } : props.product.product
    let name = !props.product.categoryId ? product.size + " - " + product.name : product.name
    return (
        <div className={"ds-grid  mb-1 border-line-dotted " + (props.type === "detail" ? "cart-tpl-col-detail" : "cart-teamplate-columns")}>
            <h3 className="grid-area-a mb-1">{name}</h3>
            <div className="ds-flex grid-area-b mb-1">
                <button disabled={props.type === "checkout"}
                    className="icon-container "
                    onClick={e => props.HandleQuantity({ number: -1, index: props.index })}>
                    <AiOutlineMinus color="black" />
                </button>
                <input disabled={true}
                    className="icon-container cursor-auto"
                    value={product.quantity}
                    type="number" />
                <button disabled={props.type === "checkout"}
                    className="icon-container "
                    onClick={e => {
                        console.log(e)
                        props.HandleQuantity({ number: 1, index: props.index })
                    }}>
                    <BsPlus color="black" />
                </button>
            </div>
            <h3 className={"grid-area-c  mb-1 " + (props.type === "detail" ? "ml-auto" : "")} >
                x{(product.price).toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')} Đ
            </h3>
            {!props.product.categoryId ?
                <p className="grid-area-d">{cheese.name} cheese</p> : ""}
            {!props.product.categoryId ?
                <h4 className="fs-15 ml-auto grid-area-f">{cheese.price.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')} Đ</h4> : ""}
            {props.type !== "checkout" ?
                <button className="grid-area-e cursor-pointer" onClick={e => props.RemoveFromCart(props.index)}>Remove</button> : ""}
        </div >
    );
}

export default CartItemDetail;
