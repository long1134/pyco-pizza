import { put, takeEvery } from "redux-saga/effects"
import * as Slice from "../Slice"
import axios from "axios"
import api from "../../../services/api"

export function* handleLogin(action) {
    try {
        let data = {}
        let error = ""
        yield axios({
            method: "post",
            data: { ...action.payload },
            url: api.urlLogin
        }).then(res => {
            data = res.data
        }).catch(err => {
            error = err
        })
        if (error) {
            console.log(error["response"].data)
            if (error["response"].status === 302) {

                return yield put(Slice.actions.LoginSuccess({ ...error["response"].data }))
            }
            return yield put(Slice.actions.LoginFail(error))
        }
        yield put(Slice.actions.LoginSuccess(data))
    } catch (e) {
    }
}

export function* login() {
    yield takeEvery(Slice.actions.Login, handleLogin)
}

export default {
    login
}