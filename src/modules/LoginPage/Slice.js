import { createSlice, compose } from '@reduxjs/toolkit';
import * as Coockie from "js-cookie"

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: {},
        token: "",
        messageError: "",
        loginSuccess: false
    },
    reducers: {
        Login: (state, props) => {
        },
        LoginSuccess: (state, props) => {
            state.messageError = ""
            state.loginSuccess = true
            Coockie.set("user", JSON.stringify(props.payload.user), { expires: 1 / 24 })
            Coockie.set("token", props.payload.token, { expires: 1 / 24 })
        },
        LoginFail: (state, props) => {
            state.messageError = props["payload"].response.data.message
        },
    },
});

// export const { create, removeUserById, activeUserById, deactiveUserById } = userSlice.actions;
export const actions = loginSlice.actions;

export const reducers = state => state.login;

export default loginSlice.reducer;
