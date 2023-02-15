import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let chart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        chart[i] = 0;
    }
    return chart;
}

export function ShopContextProvider({ children }) {
    const [ cartItems, setCartItems ] = useState(getDefaultCart() )

    const getTotalChartAmount = () =>{
        let totalAmount = 0;
        for ( const item in cartItems ){
            if(cartItems[item] > 0){
                let ItemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * ItemInfo.price; 
            }
        }
        return totalAmount;
    };

    const addToChart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }


    const removeFromChart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const removeProduct = (itemId) =>{
        setCartItems(prev => prev = {...prev , [itemId] : 0})
    }

    const updateChartItemCount = ( newAmount, itemId ) => {
        setCartItems((prev) => ({ ...prev, [itemId] : newAmount }))
    }

    const checkout = () => {
        setCartItems(getDefaultCart())
    }

    const contextValue = {
        cartItems,
        getTotalChartAmount,
        addToChart,
        removeFromChart,
        updateChartItemCount,
        removeProduct,
        checkout
    }

    
  return (
    <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
  )
}
