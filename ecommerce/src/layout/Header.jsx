import React from "react";
import {  Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';
import data from "../data/data.json";

function Header() {
  const {menu} = data;
  return (
    <header className="pr-64 pl-64 container mx-auto flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="pl-50 text-lg font-bold">Bandage</h1>
      <nav>
        <ul className="flex space-x-4">
          {menu.map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase()}`} className="text-gray-500 hover:text-black">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex space-x-4 ml-[90px]">
  <div className="flex items-center space-x-1">
    <FaUser className="text-blue-500 cursor-pointer" />
    <span className="text-blue-500 cursor-pointer">Login/Register</span>
  </div>
  <FaShoppingCart className="text-blue-500 cursor-pointer" />
  <FaSearch className="text-blue-500 cursor-pointer" />
  <FaHeart className="text-blue-500 cursor-pointer" />
</div>



    </header>
  );
}

export default Header;
