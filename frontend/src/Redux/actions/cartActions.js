import { ActionTypes } from "../constants/action-types";

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    };
}

export const removeFromCart = () =>{
    return {
        type: ActionTypes.REMOVE_FROM_CART
    };
}

export const adjustQuantity = (itemId, value) => {
    return {
        type: ActionTypes.ADJUST_QUANTITY,
        payload: {
            id: itemId,
            qty: value,
        },
    };
}

export const loadCurrentItem = (item) => {
    return {
        type: ActionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
}