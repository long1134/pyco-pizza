import { createSlice, compose } from '@reduxjs/toolkit';
import * as Coockie from "js-cookie"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        total: 0
    },
    reducers: {
        InitData: (state, props) => {
            const products = []
            let total = 0
            let jsonData = Coockie.get("cart") ? JSON.parse(Coockie.get("cart")) : []
            for (let i in jsonData) {
                if (jsonData[i].pizza)
                    total += (jsonData[i].pizza.price + jsonData[i].cheese.price) * jsonData[i].pizza.quantity
                else {
                    total += jsonData[i].product.price * jsonData[i].product.quantity

                }
                products.push(jsonData[i])
            }
            state.products = products
            state.total = total
        },
        AddToCart: (state, props) => {
            let quantity = Coockie.get("quantity") ? Coockie.get("quantity") : 0
            quantity++
            Coockie.set("quantity", JSON.stringify(quantity), { expires: 1 / 24 })
            state.products.push(props.payload)
            if (props.payload.pizza) {
                state.total += props.payload.pizza.price + props.payload.cheese.price
            }
            else {
                state.total += parseInt(props.payload.product.price)
            }
            Coockie.set("cart", JSON.stringify({ ...state.products }), { expires: 1 / 24 })
        },
        //handle button remove in cartitem 
        RemoveFromCart: (state, props) => {
            const products = state.products
            const index = props.payload
            let quantity = Coockie.get("quantity") ? parseInt(Coockie.get("quantity")) : 0
            if (products[index].pizza) {

                quantity -= products[index].pizza.quantity
                Coockie.set("quantity", JSON.stringify(quantity), { expires: 1 / 24 })
                state.total -= (products[index].pizza.price + products[index].cheese.price) * products[index].pizza.quantity
            }
            else {
                quantity -= products[index].product.quantity
                Coockie.set("quantity", JSON.stringify(quantity), { expires: 1 / 24 })
                state.total -= products[index].product.price * products[index].product.quantity
            }
            products.splice(index, 1)
            Coockie.set("cart", JSON.stringify({ ...products }), { expires: 1 / 24 })
        },
        //handle button plus and minus in cartitem 
        HandleQuantity: (state, props) => {
            //get data and products from props
            const data = props.payload
            const products = state.products

            //get quantity in cookie
            let quantity = Coockie.get("quantity") ? parseInt(Coockie.get("quantity")) : 0
            quantity += parseInt(data.number)

            //update quantity to cookie
            Coockie.set("quantity", JSON.stringify(quantity), { expires: 1 / 24 })

            //update total and product to state and cookie
            if (products[data.index].pizza) {
                state.total += (products[data.index].cheese.price + products[data.index].pizza.price) * parseInt(data.number)
                products[data.index].pizza.quantity += parseInt(data.number)
                if (products[data.index].pizza.quantity <= 0) {
                    products.splice(data.index, 1)
                }
            }
            else {
                state.total += products[data.index].product.price * parseInt(data.number)
                products[data.index].product.quantity += parseInt(data.number)
                if (products[data.index].product.quantity <= 0) {
                    products.splice(data.index, 1)
                }
            }
            Coockie.set("cart", JSON.stringify({ ...products }), { expires: 1 / 24 })
        },
        //handle button checkout in step 4 checkout, back to product page and reset product in cart 
        DeleteData: (state, props) => {
            state.total = 0
            state.products = []
            Coockie.remove("orderInfo")
            Coockie.remove("cart")
            Coockie.set("quantity", 0, { expires: 1 / 24 })
        }

    },
});

// export const { create, removeUserById, activeUserById, deactiveUserById } = userSlice.actions;
export const actions = cartSlice.actions;

export const reducers = state => state.cart;

export default cartSlice.reducer;
