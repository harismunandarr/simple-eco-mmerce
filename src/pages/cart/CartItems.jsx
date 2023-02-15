import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export function CartItems({ data }) {

  const { id, productName, price, productImage } = data;
  const { addToChart, removeFromChart, cartItems, updateChartItemCount, removeProduct } = useContext(ShopContext)

  return (
    <div className='w-full h-full flex flex-col justify-between items-center p-5 rounded-md shadow-lg bg-white'>
      <div className='w-[200px] h-[200px] flex items-center justify-center'>
        <img src={productImage} alt="" className='w-[150px] h-[150px]'/>
      </div>
      <div className='w-full h-full flex flex-col justify-between'>
        <p>
          <b>{productName}</b>
        </p>
        <p>Price : $ {price}</p>
        <div className='w-full flex items-center justify-between'>
          <button
          className='w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold'
          onClick={ () => removeFromChart(id) }> - </button>
          <input 
          className='w-[50%] h-10 border-2 outline-none text-center'
          value={cartItems[id]}
          onChange={ (e) => updateChartItemCount(Number(e.target.value), id) }
          />
          <button 
          className='w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold'
          onClick={ () => addToChart(id) }> + </button>
        </div>
        <button
        className='bg-gray-500 h-10 rounded-md text-white outline-none'
        onClick={() => removeProduct(id)}>Remove Product</button>
      </div>
    </div>
  )
}
