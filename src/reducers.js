import productReducer from './modules/ProductsPage/Slice';
import cartReducer from './common/CartComponent/Slice';
import loginReducer from './modules/LoginPage/Slice';
import signUpReducer from './modules/SignUpPage/Slice';

export default {
    products: productReducer,
    cart: cartReducer,
    login: loginReducer,
    signup: signUpReducer
};
