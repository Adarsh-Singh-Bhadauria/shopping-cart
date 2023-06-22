import React, {useEffect} from 'react'
import { closeModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartslice'
import { useDispatch } from 'react-redux'

const Modal = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const dispatch= useDispatch()

  return (
    <div className='flex flex-col items-center'>
        <div>
            <h4 className='text-xl font-bold my-4'>Remove all items from your shopping cart?</h4>
        </div>
        <div className='mb-4 space-x-6'>
            <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={()=>{
                dispatch(clearCart())
                dispatch(closeModal())
            }}>CONFIRM</button>
            <button className='bg-transparent hover:bg-slate-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={()=>{
                dispatch(closeModal())
            }}>CANCEL</button>
        </div>
    </div>
  )
}

export default Modal