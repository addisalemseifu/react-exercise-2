import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice';

export default function CartContainer() {
    const dispatch = useDispatch();
    const {cartItems,total,amount} = useSelector((mystore) => mystore.cart);
    if(amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
  return (
    <section className='cart'>
        <header>
            <h2>your bag</h2>
        </header>
        <div>
            {cartItems.map((item)=>{
return <CartItem key = {item.id} {...item} />
            })}
        </div>
        <footer>
            <hr />
            <div className='cart-total'>

            </div>
            <h4>total <span>${total}</span></h4>
            <button className='btn clear-btn' onClick={()=>dispatch(clearCart())}>CLEAR CART</button>
        </footer>
    </section>
  )
}
