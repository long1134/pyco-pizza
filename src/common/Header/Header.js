//logo https://lh3.google.com/u/0/d/1OoPYOcT6WjM4x5aKiSK5RgZhUZ9e0_Ao=w1920-h902-iv1
import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"
import * as Coockie from "js-cookie"
import { FiMenu } from "react-icons/fi"
import { useSelector, useDispatch } from 'react-redux';
import * as cartSlice from "../CartComponent/Slice"
import "./scss/header.scss"

function Header(props) {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const cartReducer = useSelector(cartSlice.reducers)
    function HandleAccount(action) {
        if (action === "login") {
            if (!user.firstname)
                props.history.push("/login")
        }
        if (action === "signup") {
            if (!user.firstname)
                props.history.push("/signup")
            else {
                Coockie.remove("token")
                Coockie.remove("user")
                props.history.push("/")
                setUser({})
            }
        }
    }
    var quantity = Coockie.get("quantity") ? JSON.parse(Coockie.get("quantity")) : 0

    useEffect(() => {
        dispatch(cartSlice.actions.InitData())
        let userData = Coockie.get("user")
        // console.log(JSON.parse(Coockie.get("quantity")))
        if (userData) {
            setUser({ ...JSON.parse(userData) })
        }
    }, [])
    quantity = cartReducer.quantity
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="logo"
                        onClick={e => props.history.push("/")}>
                    </div>
                    <div className="ml-auto ds-flex">
                        <div className=" ds-flex ">
                            <FaUserCircle size={25} color="white" />
                            <span className="cursor-pointer"
                                onClick={e => HandleAccount("login")}>
                                {user.firstname ? user.firstname + " " + user.lastname : "Sign in"} /
                        </span>
                            <span className="cursor-pointer"
                                onClick={e => HandleAccount("signup")}>
                                {user.firstname ? "Sign out" : "Sign up"}
                            </span>
                        </div>
                        <div className="ds-flex ml-2 cursor-pointer ps-relative cart-desktop"
                            onClick={e => props.history.push("/cart-summary")}>
                            <span>Your cart</span>
                            <FaShoppingCart size={25} color="white" />
                            <div className="count bg-red">{quantity}</div>
                        </div>
                        <div className="ds-flex ml-2 cursor-pointer ps-relative cart-mobile"
                            onClick={e => props.history.push("/cart-summary")}>
                            <FaShoppingCart size={25} color="white" />
                            <div className="count bg-red">{quantity}</div>
                        </div>
                        <FiMenu className=" ml-2" color="white" />
                    </div>
                </div>
            </div>
        </header >
    );
}
export default Header