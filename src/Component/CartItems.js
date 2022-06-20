import React from 'react'
import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import formatCurrency from 'format-currency'
const CartItems = ({item}) => {
 const {removeItem} = useContext(CartContext);
 let opts = { format:'%s%v', symbol:'$ '}
  return (
    <li className='CartItem__item'> 
       <img src={item.image} alt='' />
       <div> 
           {item.name} {formatCurrency(`${item.price}`,opts)}
       </div>
       <button className='CartItem__button' onClick={()=>removeItem(item.id)}>
            
       </button>
    </li>
  )
}

export default CartItems