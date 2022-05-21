import { combineReducers } from "redux";

import { productreducer, selectedproductreducer } from "./productReduer";
import { cartReducer,removeFromCart } from "./cartReducer"; 

const reducers = combineReducers({
    allProducts:productreducer,
    product: selectedproductreducer,
    cart: cartReducer,
    removecart: removeFromCart,
});

export default reducers;