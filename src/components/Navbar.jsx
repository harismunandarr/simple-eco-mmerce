import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { AiOutlineShoppingCart } from "react-icons/ai"

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  const getCartItemCount = () => {
    const itemCounts = Object.values(cartItems);
    const totalCount = itemCounts.reduce((total, count) => total + count, 0);
    return totalCount;
  };

  return (
    <nav className="max-w-[1200px] mx-auto h-32 flex items-center justify-between border-b-4 sticky top-0 left-0 bg-white px-5">
        <h1 className="text-4xl text-green-700 font-bold">Tokopaedi</h1>
      <div className="flex gap-10">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
            <div className="relative">
                <AiOutlineShoppingCart className="text-4xl"/> 
                <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center absolute bottom-5 left-5">{getCartItemCount()}</div>
            </div>
        </Link>
      </div>
    </nav>
  );
};