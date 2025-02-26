import React, { useState } from "react";
import { FaThLarge, FaList } from "react-icons/fa";

const ResultsFilter = ({ data }) => {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("popularity");

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
      {/* Sonuç Bilgisi */}
      <p className="text-gray-500 text-sm">
        Showing all {data?.bestSellers?.products?.length || 0} results
      </p>

      {/* Görünüm Seçenekleri */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-500">Views:</span>
        <button
          className={`p-2 rounded ${view === "grid" ? "bg-gray-200" : "hover:bg-gray-100"}`}
          onClick={() => setView("grid")}
        >
          <FaThLarge className="text-gray-600" />
        </button>
        <button
          className={`p-2 rounded ${view === "list" ? "bg-gray-200" : "hover:bg-gray-100"}`}
          onClick={() => setView("list")}
        >
          <FaList className="text-gray-600" />
        </button>
      </div>

      {/* Sıralama */}
      <select
        className="border border-gray-300 rounded px-3 py-1 text-gray-600"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="popularity">Popularity</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="newest">Newest</option>
      </select>

      {/* Filtre Butonu */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Filter
      </button>
    </div>
  );
};

export default ResultsFilter;
