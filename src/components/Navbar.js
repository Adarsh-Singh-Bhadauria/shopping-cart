import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from "react-redux";

import React from 'react'

const Navbar = () => {

    const amount= useSelector((store) => store.cart.amount)

  return (
    <nav>
        <div className='p-4 bg-purple-600 text-white font-bold flex justify-between'>
            <h2>SHOP IT</h2>
            <div className='flex'>
                <AiOutlineShoppingCart className='text-2xl'/>    
                <p>{amount}</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar