import { ActionTypes } from "../constants/action-types";



const INITIAL_STATE = { //product details like id desc img
    product: [],
};


export const cartReducer =(state = INITIAL_STATE, {type, payload}) => {
    switch(type){
        case ActionTypes.ADD_TO_CART:
            return {...state, product:payload};
        default:
            return state;
    }
};

export const removeFromCart = (state={}, {type, payload})=>{
    switch(type){
        case ActionTypes.REMOVE_FROM_CART:
            return {}
        default:
            return state;
    }
}