import React from 'react'
import { assets } from '../../assets/assets'

function Cart() {
  return (
    <section className='py-5'>
        <div className='container w-[80%] max-w-[80%] flex '>
            <div className='w-[75%]'>
                <h2>Your Cart</h2>
                <p className='mt-0'>There are <span className='font-bold text-primary'>2</span> Product in your cart</p>
                <div className='shadow-md rounded-md p-5 bg-white'>
                    <div className='w-full p-3 flex items-center gap-4'>
                        <div className='w-[15%] rounded-md overflow-hidden'>
                            <img src={assets.FashionImage1} alt="" />
                        </div>
                        <div className='w-[85%]'>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart