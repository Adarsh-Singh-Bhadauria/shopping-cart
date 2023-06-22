import React from 'react'
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'
import { removeItem, increase, decrease } from '../features/cart/cartslice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, title, image, price, amount}) => {

    const dispatch= useDispatch()

  return (
    <article className='flex p-16 justify-center'>
        <div>
            <h4 className='font-semibold'>{title}</h4>
            <h4 className='font-bold'>{price}</h4>
            <img className='w-full h-32 object-cover rounded-t-lg my-4 sm:h-[200px]' src={image} alt='/'/>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4' onClick={()=>{dispatch(removeItem(id))}}>Remove</button>
        </div>
        <div className='self-center ml-8 font-bold'>
            <button onClick={()=>{dispatch(increase({id}))}}>
                <AiOutlineArrowUp/>
            </button>
            <p>{amount}</p>
            <button onClick={()=>{
                if(amount===1){
                    dispatch(removeItem(id))
                    return
                }

                dispatch(decrease({id}))}}>
                <AiOutlineArrowDown/>
            </button>
        </div>
    </article>
  )
}

export default CartItem