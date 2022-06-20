import {SHOW_HIDE_CART,ADD_TO_CART,REMOVE_ITEM} from '../Types'

const CartReducer = (state,action) =>{
    switch(action.type) {
        case SHOW_HIDE_CART:{
            return{
                ...state,
                showCart :!state.showCart
            }
        }
        case ADD_TO_CART:{
            return{
                ...state,
                CartItem:[...state.CartItem,action.payload]
            }
        }
        case REMOVE_ITEM: {
           return{
              ...state,
              CartItem:state.CartItem.filter((item)=>item._id !== action.payload)
           }
        }
        default:
            return state;
    } 
}

export default CartReducer