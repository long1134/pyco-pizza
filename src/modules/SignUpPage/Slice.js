import { createSlice } from '@reduxjs/toolkit';

export const SignUpSlice = createSlice({
    name: 'signup',
    initialState: {
        user: {},
        token: "",
        messageError: "",
        signUpSuccess: false,
        signUpFail: false
    },
    reducers: {
        SignUp: (state, props) => {
            state.signUpFail = false
            state.signUpSuccess = false
        },
        SignUpSuccess: (state, props) => {
            state.messageError = ""
            state.signUpSuccess = true
        },
        SignUpFail: (state, props) => {
            state.messageError = props["payload"].response.data.message
            state.signUpFail = true
        },
    },
});

// export const { create, removeUserById, activeUserById, deactiveUserById } = userSlice.actions;
export const actions = SignUpSlice.actions;

export const reducers = state => state.signup;

export default SignUpSlice.reducer;
