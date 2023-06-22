import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = () => {

    const dispatch= useDispatch()
    const {cartItems, total, amount}= useSelector((store)=>store.cart)

    if(amount<1){
        return(
            <section>
                <header className='flex flex-col items-center my-8'>
                    <h2 className='text-4xl font-bold'>YOUR SHOPPING CART</h2>
                    <h4 className='text-2xl font-bold'>is currently empty</h4>
                </header>
            </section>
        )
    }

  return (
    <section>
        <header className='flex justify-center my-8'>
            <h2 className='text-xl font-bold sm:text-4xl'>YOUR SHOPPING CART</h2>
        </header>
        <div className='flex flex-col'>
            {cartItems.map((item)=>{
                return <CartItem key={item.id} {...item} />
            })}
        </div>
        <footer className='flex flex-col items-center'>
            <div>
                <hr/>
                <h4 className='font-bold'>TOTAL <span>${total.toFixed(2)}</span></h4>
            </div>
            <button className='my-8 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={()=>{dispatch(openModal())}}>CLEAR CART</button>
        </footer>
    </section>
  )
}

export default CartContainer