import { useState } from "react";
import { Star, Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Mevcut resmin indexini tutan state

  // Ürün verileri
  const product = {
    name: "Discounted Product",
    price: 1139.33,
    rating: 4,
    reviews: 10,
    availability: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    colors: [
      { name: "blue", hex: "#23a6f0" },
      { name: "green", hex: "#2dc071" },
      { name: "orange", hex: "#e77c40" },
      { name: "navy", hex: "#252b42" },
    ],
    images: [
      "/siyahkoltuk.png?height=600&width=600",
      "/sandalye.png?height=600&width=600",
      "/siyahkoltuk2.png?height=600&width=600",
    ],
  };

  // Bir önceki resme geçiş
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1));
  };

  // Bir sonraki resme geçiş
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === product.images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ürün Resimleri Bölümü */}
        <div className="relative">
          {/* Ana Resim */}
          <div className="relative aspect-square bg-gray-100 rounded-md overflow-hidden">
            <img src={product.images[currentImageIndex]} alt={product.name} className="w-full h-full object-cover" />

            {/* Sol Ok Butonu */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 rounded-full shadow-md"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* Sağ Ok Butonu */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 rounded-full shadow-md"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Küçük Resimler (Thumbnails) */}
          <div className="flex mt-4 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`w-24 h-24 border ${currentImageIndex === index ? "border-blue-500" : "border-gray-300"} rounded-md overflow-hidden cursor-pointer`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Ürün Bilgileri */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

          {/* Puanlama */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className={`w-5 h-5 ${index < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="ml-2 text-gray-500">{product.reviews} Reviews</span>
          </div>

          {/* Fiyat */}
          <div className="mb-4">
            <span className="text-3xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
          </div>

          {/* Stok Durumu */}
          <div className="mb-6 flex items-center">
            <span className="text-gray-500">Availability:</span>
            <span className="ml-1 text-blue-500">{product.availability}</span>
          </div>

          {/* Açıklama */}
          <p className="text-gray-500 mb-8">{product.description}</p>

          <div className="h-px w-full bg-gray-300 mb-8"></div>

          {/* Renk Seçenekleri */}
          <div className="flex gap-2 mb-8">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.name ? "ring-2 ring-offset-2" : ""}`}
                style={{ backgroundColor: color.hex, borderColor: selectedColor === color.name ? color.hex : "transparent" }}
              ></button>
            ))}
          </div>

          {/* Aksiyon Butonları */}
          <div className="flex gap-2">
            <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md">Select Options</button>
            <button className="p-3 border border-gray-300 rounded-md">
              <Heart className="w-5 h-5 text-gray-800" />
            </button>
            <button className="p-3 border border-gray-300 rounded-md">
              <ShoppingCart className="w-5 h-5 text-gray-800" />
            </button>
            <button className="p-3 border border-gray-300 rounded-md">
              <Eye className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
