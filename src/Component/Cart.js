import { useContext } from "react";
import './Cart.css'
import CartContext from "../Context/Cart/CartContext";
import formatCurrency from "format-currency";
import CartItems from "./CartItems";
const Cart = () =>{
    const {showCart,CartItem,showHideCart} = useContext(CartContext)
    let opts = { format:'%s%v', symbol:'$ '}
   return(
    <>
       {
        showCart && (
            <div className="cart__wrapper">
                <div style={{textAlign:"right"}}>
                    <i style={{cursor:"pointer"}} className="fa fa-times-circle" onClick={showHideCart}/>
                </div>
                <div className="cart__innerWrapper">
                    {
                        CartItem.length === 0 ? (
                            <h4>Cart is Empty</h4>
                        ) :(
                            <ul>
                                {
                                    CartItem.map((item)=>(
                                       <CartItems key={item.id} item={item} />
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
                <div className="Cart__cartTotal">
                    <div>Cart Total</div>
                    <div></div>
                    <div style={{marginLeft:5}}>
                        {
                            formatCurrency(CartItem.reduce((amount,titem)=>titem.price + amount,0),opts)
                        }
                    </div>
                </div>
            </div>
        )
      } 
    </>
   )
}
export default Cart