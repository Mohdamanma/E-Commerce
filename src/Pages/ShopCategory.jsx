import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Component/Item'

function ShopCategory({category,banner}) {
  const {all_product} = useContext(ShopContext)
  console.log("All product are :",all_product)
  
  const filteredProduct = all_product.filter((item) => item.category === category)
  
  console.log("Filtered Category are :",filteredProduct)

  return (
    <div>
      <img src={banner} alt="" />
      <div className='grid sm:grid-cols-4 grid-cols-1 gap-12 my-24 px-5'>
            {filteredProduct.map((item,i) =>{
               return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default ShopCategory