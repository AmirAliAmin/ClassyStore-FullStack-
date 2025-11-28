import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";
import { BsArrowsFullscreen } from "react-icons/bs";
import { TiStar } from "react-icons/ti";
import { GoStar } from "react-icons/go";

function ProductCard({ id,name,brand,price,original,discount,category,image }) {
  return (
    <div>
        <div className='border border-gray-300 rounded-lg shadow'>
          <div className='relative group h-50 overflow-hidden rounded-t-lg flex justify-center '>
            <Link to={`/product/${id}`}>
            <img src={image[0]} alt="" className='w-60  block transition-all duration-700 hover:scale-90 rounded-t-lg group-hover:hidden  ' />
            <img src={image[1]?image[1]:image[0]} alt="" className='hidden w-60 rounded-t-lg group-hover:block  transition-all duration-700 hover:scale-110  object-cover' />
            </Link>
            <p className='absolute bg-primary text-white top-2 left-2 rounded-full w-7 flex items-center justify-center h-7 text-xs'>{discount}%</p>
            <div className='absolute -top-25 group-hover:top-2 right-5  flex-col flex gap-2  transition-all duration-500 z-10'>
              <div className='w-7 h-7 bg-white text-black flex items-center justify-center rounded-full hover:bg-primary hover:text-white cursor-pointer'>
                <BsArrowsFullscreen/>
              </div>
              <div className='w-7 h-7 bg-white text-black flex items-center justify-center rounded-full hover:bg-primary hover:text-white cursor-pointer'>
              <FaRegHeart />
              </div>
              <div className='w-7 h-7 bg-white text-black flex items-center justify-center rounded-full hover:bg-primary hover:text-white cursor-pointer'>
              <GoGitCompare/>
              </div>
            </div>
          </div>
            <div className='py-5 px-3'>
            <p className='text-gray-700 text-sm'>{brand}</p>
            <h1>{name.slice(0,10)}...</h1>
            <div className='flex items-center'>
              <TiStar className='text-[#FAAF00]'/><TiStar className='text-[#FAAF00]' /><TiStar className='text-[#FAAF00]' /><TiStar className='text-[#FAAF00]' /><GoStar className='text-gray-400 text-xs' />
            </div>
            <div className='flex justify-between text-sm'>
              <p className='line-through text-gray-500'>₹{original}.00</p>
              <p className='text-primary'>₹{price}.00</p>
            </div>
            <button className='w-full border border-primary mt-2 py-2 text-primary rounded-lg text-xs flex items-center text-center justify-center gap-1 cursor-pointer hover:bg-primary hover:text-white'><IoCartOutline className='text-xl'/> ADD TO CART</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard