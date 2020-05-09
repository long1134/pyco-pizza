import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store'
import * as Slice from "../Slice"
import * as Sagas from "../sagas/loginPage"
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import SagaTester from 'redux-saga-tester';
import fromGenerator from 'redux-saga-test';

import storeMain from "../../../stores"
import { FaItalic } from 'react-icons/fa';

const handleSagasLogin =

    it("work with unit test", async () => {
        const action = await Sagas.handleLogin({ payload: { emailorphone: "0778722539", password: "longvip113" } })
        action.next()
        console.log(action.next().value)

    })