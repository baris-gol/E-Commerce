import { useState, useEffect } from "react";
import data from "../data/data.json";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const BestSellerProduct = () => {
  const { categories, products } = data.bestSellers; 
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

    const banner = data.BestSellersProduct.banner; 

  const selectedCategory = categories[selectedIndex];

  // Kategori değiştiğinde ürünleri filtrele
  useEffect(() => {
    setFilteredProducts([]);
    setTimeout(() => {
      const newProducts = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(newProducts);
    }, 0);
  }, [selectedCategory]);

  // Kategori değiştir
  const handleNextCategory = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrevCategory = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  return (
    <section className=" pl-62 pr-62 container mx-auto px-6 py-10 flex flex-col md:flex-row gap-6">
      {/* SOL ÜRÜN LİSTESİ */}
      <div className="w-full md:w-3/4">
        {/* Kategori Başlığı ve Oklar */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 relative">
          <h2 className="text-xl font-semibold text-gray-900 tracking-wide">
            BESTSELLER PRODUCTS
          </h2>

          {/* Kategoriler ve Oklar */}
          <div className="flex items-center space-x-4">
            {/* Kategoriler */}
            <div className="flex space-x-6 text-gray-500">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`text-sm transition-all duration-300 cursor-pointer ${
                    selectedIndex === index
                      ? "font-bold text-blue-500"
                      : "hover:text-blue-500"
                  }`}
                  onClick={() => setSelectedIndex(index)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Oklar */}
            <div className="flex space-x-2">
              <button
                onClick={handlePrevCategory}
                className="w-8 h-8 flex items-center justify-center border rounded-full shadow-md bg-white hover:bg-gray-100 transition"
              >
                <FiChevronLeft size={18} />
              </button>

              <button
                onClick={handleNextCategory}
                className="w-8 h-8 flex items-center justify-center border rounded-full shadow-md bg-white hover:bg-gray-100 transition"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Ürün Listesi */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="text-center flex flex-col items-center bg-white shadow-md rounded-lg p-4"
            >
              <div className="w-28 h-28 flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                {product.title}
              </h3>
              <p className="text-xs text-gray-500">{product.department}</p>
              <p className="mt-1 text-sm">
                <span className="text-gray-400 line-through">${product.price}</span>{" "}
                <span className="text-green-500 font-semibold">
                  ${product.discountPrice}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SAĞ KATEGORİ BANNER'I */}
      <div className="w-full md:w-1/4 relative">
        <img
          src={banner.image} // ✔ Doğru JSON'dan banner çekildi
          alt="Category Banner"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute top-6 left-6 text-black font-bold">
          <h3 className="text-sm uppercase">{banner.category}</h3>
          <p className="text-xs text-gray-500">{banner.itemsCount}</p>
        </div>
      </div>
    </section>
  );
};

export default BestSellerProduct;
