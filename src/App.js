import React from 'react';
import logo from './logo.svg';

import { Provider } from "react-redux"
import WrappedComponent from './modules/WrappedComponent/WrappedContainer';
import HomePage from './modules/HomePage/HomePageContainer';
import LoginPage from './modules/LoginPage/LoginPageContainer';
import SignUpPage from './modules/SignUpPage/SignUpPageContainer';
import SummaryPage from './modules/SummaryPage/SummaryPageContainer';
import ProductPage from './modules/ProductsPage/ProductsPageContainer';
import ProductDetailPage from './modules/ProductDetail/ProductsPageDetailContainer';
import FillShippingPage from './modules/FillShippingPage/FillShippingPageContainer';
import LoginCarryOutPage from './modules/LoginCarryOutPage/LoginCarryOutPage';
import FillOrderInfoPage from './modules/FillOrderInfoPage/FillOrderInfoPageContainer';
import CheckoutPage from './modules/CheckoutPage/CheckoutPageContainer';
import { ConnectedRouter } from "connected-react-router"
import { Route, Switch } from "react-router-dom";
import "./scss/base/_base.scss"
import "./scss/index.scss"

import configureStore from "./stores"

const { store, history } = configureStore()

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <WrappedComponent history={history}>
              <Route path="/" exact component={HomePage} />
              <Route path="/product*" exact component={ProductPage} />
              <Route path="/product-detail" exact component={ProductDetailPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/cart-summary" component={SummaryPage} />
              <Route path="/shipping" component={FillShippingPage} />
              <Route path="/login-carry-out" component={LoginCarryOutPage} />
              <Route path="/order-info" component={FillOrderInfoPage} />
              <Route path="/checkout" component={CheckoutPage} />
            </WrappedComponent>
          </Switch>
        </ConnectedRouter >
      </Provider>
    </div>
  );
}

export default App;
