import React from 'react'
import arrow_icon from './Asset/Frontend_Assets/breadcrum_arrow.png'

function BreadCrum({ product }) {



  return (
    <div className='flex'>
      HOME <img src={arrow_icon} alt="" />SHOP < img src={arrow_icon} alt="" /> {product.category} < img src={arrow_icon} alt="" /> {product.name}
    </div >
  )
}

export default BreadCrum