import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Component/BreadCrum'
import ProductDisplay from '../Component/ProductDisplay'

function Product() {
  const { all_product } = useContext(ShopContext)

  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))

  // console.log("prodect id is :",productId)
  return (
    <div className='h-screen'>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product