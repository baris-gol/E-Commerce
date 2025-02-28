import React from 'react';

export default function BestsellerProducts() {
  // Product data
  const products = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/bıcakcatal.png?height=300&width=300"
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/kadeh.png?height=300&width=300"
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/beyaztabak.png?height=300&width=300"
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/fincan.png?height=300&width=300"
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/yesiltabak.png?height=300&width=300"
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/sandalye.png?height=300&width=300"
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/kadeh.png?height=300&width=300"
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/bıcakcatal.png?height=300&width=300"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-left text-[#252b42] mb-4">BESTSELLER PRODUCTS</h2>
        <div className="h-px w-full bg-[#ececec]"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="flex flex-col">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden mb-4">
              <img 
                src={product.image || "/placeholder.svg"} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-base font-bold text-[#252b42] mb-1">{product.title}</h3>
              <p className="text-sm text-[#737373] mb-2">{product.department}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#bdbdbd]">${product.originalPrice.toFixed(2)}</span>
                <span className="text-sm font-bold text-[#23856d]">${product.salePrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
