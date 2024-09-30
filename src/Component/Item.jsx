import React from 'react'

function Item({name,image,newPrice,oldPrice}) {
    return (
        <div className='cursor-pointer w-72 hover:scale-105 hover:transition-all duration-700 '>
            <img src={image} alt="" />
            <p>{name}</p>
            <div className='flex my-3 gap-3'>
                {/* New Price */}
                <p className=' font-medium'>${newPrice}</p>
                {/* Old Price   */}
                <p className='font-medium line-through text-gray-600'>${oldPrice}</p>
            </div>
        </div>
    )
}

export default Item