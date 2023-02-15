import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export default function Product({ data }) {

  const { id, productName, price, productImage } = data;
  const { addToChart, cartItems } = useContext(ShopContext)

  const cartItemCount = cartItems[id]

  return (
    <div className='w-full h-full px-5'>
      <div className='w-full h-full flex flex-col gap-3 justify-between items-center p-5 rounded-md shadow-lg bg-white'>
        <img src={productImage} alt="" className='w-[200px] h-[200px]'/>
          <div className='w-full flex flex-col items-start'>
            <p>
              <b>{productName}</b>
            </p>
            <p>$ {price}</p>
          </div>
        <button
        className='bg-orange-500 hover:bg-orange-700 transition-all text-white h-10 px-5 rounded-md outline-none mr-auto'
        onClick={() => addToChart(id)}>Add to Cart</button>
      </div>
    </div>
  )
}
