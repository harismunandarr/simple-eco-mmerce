import React, { useContext } from 'react'
import { ShopContext } from './../../context/ShopContext';
import { PRODUCTS } from '../../product';
import { CartItems } from './CartItems';
import { useNavigate } from 'react-router-dom';

export default function Cart() {

  const { cartItems, getTotalChartAmount, checkout } = useContext(ShopContext)
  const totalAmount = getTotalChartAmount()

  const navigate = useNavigate()

  return (
    <div className='max-w-[1200px] mx-auto px-5 bg-slate-100 py-10 flex flex-col gap-10'>
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className='w-full h-full'>
        <div className='w-full grid grid-cols-4 gap-5'>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id]  !== 0) {
              return <CartItems key={product.id} data={product}/>
            }
          })}
        </div>
      </div>

      {totalAmount > 0 ? (
        <div className='w-full flex items-center gap-20'>
          <p className='font-bold'>Subtotal : ${totalAmount}</p>
          <button
          onClick={ () =>navigate("/") }
          >{" "} Checkout {" "}</button>
        </div>
      ) : (
        <h1 className='text-2xl'> Your Shopping Cart is Empty </h1>
      )
    }

    </div>
  )
}
