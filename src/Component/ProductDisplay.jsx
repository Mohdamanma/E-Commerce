import React from 'react'
import star_icon from './Asset/Frontend_Assets/star_icon.png'
import star_dull_icon from './Asset/Frontend_Assets/star_dull_icon.png'

const ProductDisplay = ({ product }) => {
  console.log("Product Details are:", product)
  return (
    <div className='flex mx-44 my-0 gap-14 mt-7'>
      {/* LeftSide productDetails */}
      <div className='flex gap-4 h-screen'>
        <div className='flex flex-col gap-4 '>
          <img src={product.image} alt="" className='h-[163px]' />
          <img src={product.image} alt="" className='h-[163px]' />
          <img src={product.image} alt="" className='h-[163px]' />
          <img src={product.image} alt="" className='h-[163px]' />
        </div>
        <div className=''>
          <img src={product.image} alt="" />
        </div>
      </div>

      {/* RightSide productDetails */}
      <div className='flex flex-col gap-4'>
        <h1 className='font-semibold text-2xl font-[poppins] leading-10'>{product.name}</h1>
        <div className='flex'>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className='flex items-center gap-6'>
          <div className='text-gray-400 font-bold text-xl line-through'>
            ${product.old_price}
          </div>
          <div className='text-red-600 font-bold text-2xl'>
            ${product.new_price}
          </div>
        </div>
        <div className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit molestias nemo blanditiis modi consequuntur delectus, odio incidunt eum voluptate!
        </div>
        <h1>Select Size</h1>
        <div className='flex gap-4 font-medium'>
          <div className='h-9 w-9 text-center border-2 border-slate-500 '>S</div>
          <div className='h-9 w-9 text-center border-2 border-slate-500 '>M</div>
          <div className='h-9 w-9 text-center border-2 border-slate-500 '>L</div>
          <div className='h-9 w-9 text-center border-2 border-slate-500 '>XL</div>
          <div className='h-9 w-9 text-center border-2 border-slate-500 '>XXL</div>
        </div>
        <button>
          ADD TO CART
        </button>
        <p><span>Category :</span>Women  , T-shirt,CropTop</p>
        <p><span>Tags :</span>Modern , Latest</p>
      </div>
    </div >

  )
}

export default ProductDisplay
