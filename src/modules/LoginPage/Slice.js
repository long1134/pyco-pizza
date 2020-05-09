import { createSlice } from '@reduxjs/toolkit';
import * as Coockie from "js-cookie"

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: {},
        token: "",
        messageError: "",
        loginSuccess: false,
        loading: false
    },
    reducers: {
        DemoTest: (state, props) => {
            console.log(props)
        },
        Login: (state, props) => {
            state.loading = true
        },
        LoginSuccess: (state, props) => {
            state.messageError = ""
            state.loginSuccess = true
            Coockie.set("user", JSON.stringify(props.payload.user), { expires: 1 / 24 })
            Coockie.set("token", props.payload.token, { expires: 1 / 24 })
            state.loading = false
        },
        LoginFail: (state, props) => {
            state.messageError = props["payload"].response.data.message
            state.loading = false
        },
    },
});

// export const { create, removeUserById, activeUserById, deactiveUserById } = userSlice.actions;
export const actions = loginSlice.actions;

export const reducers = state => state.login;

export default loginSlice.reducer;
