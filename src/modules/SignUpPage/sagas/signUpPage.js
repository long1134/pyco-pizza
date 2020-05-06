import { put, takeEvery } from "redux-saga/effects"
import * as Slice from "../Slice"
import axios from "axios"
import api from "../../../services/api"

export function* handleSignUp(action) {
    try {
        let data = {}
        let error = ""
        yield axios({
            method: "post",
            data: { ...action.payload },
            url: api.urlSignup
        }).then(res => {
            data = res.data
        }).catch(err => {
            error = err
        })
        if (error) {
            return yield put(Slice.actions.SignUpFail(error))
        }
        yield put(Slice.actions.SignUpSuccess(data))
    } catch (e) {
    }
}

export function* SignUp() {
    yield takeEvery(Slice.actions.SignUp, handleSignUp)
}

export default {
    SignUp
}