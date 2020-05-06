import { put, takeEvery } from "redux-saga/effects"
import * as Slice from "../Slice"
import axios from "axios"
import apiServices from "../../../services/api"

export function* handleInitData(action) {
    try {
        console.log(action.payload[0])
        let api = apiServices.urlPizza
        if (action.payload[0].toLowerCase() === "/spagetti") {
            api = apiServices.urlSpagetti
        }
        else if (action.payload[0].toLowerCase() === "/drinks") {
            api = apiServices.urlDrinks
        }
        if (action.payload[0].toLowerCase() === "/salad") {
            api = apiServices.urlSalad
        }
        let data = {}
        let error = ""
        yield axios({
            method: "get",
            url: api
        }).then(res => {
            data = res.data
        }).catch(err => {
            error = err
        })
        console.log(data)
        if (error) {
            return yield put(Slice.actions.InitDataFail(error))
        }
        yield put(Slice.actions.InitDataSuccess(data))
    } catch (e) {
        console.log(e)
    }
}

export function* getProducts() {
    yield takeEvery(Slice.actions.InitData, handleInitData)
}

export default {
    getProducts
}