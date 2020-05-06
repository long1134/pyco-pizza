import { createSlice, compose } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
        ],
        productInCart: [],
        loading: false
    },
    reducers: {
        InitData: (state, props) => {
            state.products = []
            state.loading = true
        },
        InitDataSuccess: (state, props) => {
            state.products = []

            for (let i in props.payload.products) {
                let prices = []
                if (props.payload.products[i].price.sizeM) {
                    prices = [{
                        name: "Small - 7 inch",
                        price: props.payload.products[i].price.sizeM
                    }, {
                        name: "Medium - 9 inch",
                        price: props.payload.products[i].price.sizeL
                    }, {
                        name: "Large - 12 inch",
                        price: props.payload.products[i].price.sizeS
                    }]
                }
                else {
                    prices = [{ name: "price", price: props.payload.products[i].price.sizeS }]
                }
                state.products.push({
                    categoryId: props.payload.products[i].idCategory,
                    desc: props.payload.products[i].desc,
                    name: props.payload.products[i].name,
                    imgUrl: props.payload.products[i].imgUrl,
                    prices: [...prices]
                })
                state.loading = false
            }
        },
        InitDataFail: (state, props) => {
        },
    },
});

// export const { create, removeUserById, activeUserById, deactiveUserById } = userSlice.actions;
export const actions = productSlice.actions;

export const reducers = state => state.products;

export default productSlice.reducer;
