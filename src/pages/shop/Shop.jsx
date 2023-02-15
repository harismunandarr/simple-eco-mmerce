import React from 'react'
import { PRODUCTS } from '../../product'
import Product from './Product';

export default function Shop() {
  return (
    <div className='w-screen min-h-screen max-w-[1200px] mx-auto bg-slate-100 py-10'>
      <div className='grid grid-cols-3 w-full h-full gap-10'>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product}/>
        ))}
      </div>
    </div>
  )
}
