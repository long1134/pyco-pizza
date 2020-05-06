import { values } from "lodash/object"
import { fork, all } from "redux-saga/effects"
import { flatten } from 'lodash/array';
import ProductSagas from "./modules/ProductsPage/sagas"
import LoginSagas from "./modules/LoginPage/sagas"
import SignUpSagas from "./modules/SignUpPage/sagas"

const sagasList = [
    ProductSagas,
    LoginSagas,
    SignUpSagas
]

export default function* () {
    yield all(flatten(sagasList.map(sagas => values(sagas))).map(saga => fork(saga)));
}