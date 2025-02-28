import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import data from "../data/data.json";

function Header() {
  const { menu } = data;
  return (
    <header className="px-20 container mx-auto flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-lg font-bold text-gray-800">Bandage</h1>

      {/* Menü */}
      <nav>
        <ul className="flex space-x-6">
          {menu.map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-500 transition">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sağ Taraf */}
      <div className="flex space-x-6 items-center">
        {/* Login/Register Butonu */}
        <Link to="/login">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer">
            <FaUser className="text-lg" />
            <span className="font-medium">Login / Register</span>
          </button>
        </Link>

        {/* İkonlar */}
        <FaShoppingCart className="text-blue-500 text-xl cursor-pointer hover:text-blue-700 transition" />
        <FaSearch className="text-blue-500 text-xl cursor-pointer hover:text-blue-700 transition" />
        <FaHeart className="text-blue-500 text-xl cursor-pointer hover:text-blue-700 transition" />
      </div>
    </header>
  );
}

export default Header;
