import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "../layout/Header";
import FootBandage from "../components/FootBandage";
import Logo from "../components/Logo";
import HeaderShopPage from "../layout/HeaderShopPage";
import ProductDetail from "../components/ProductDetail";
import  ProductTab  from "../components/ProductTab";
import BlogPost from "../components/BlogPost";
import CardDetail from "../components/CardDetail";





function ProductDetailPage() {
    return (
        <div>
          <HeaderShopPage/>
          <Header />
          {/* BİRİNCİ COMPONENT */}
          <div className="container mx-auto px-4 py-6 pl-64 pr-64">
              <div className="flex flex-row md:flex-row items-start">
                  <Link to="/Shop" className="text-[#bdbdbd] text-sm font-medium hover:text-[#23856d]">
                    Home
                  </Link>
                  <ChevronRight className="mx-2 h-4 w-4 text-[#252b42]" />
                  <span className="text-[#252b42] text-sm font-medium">Shop</span>
              </div>
          </div>
          <ProductDetail/>
          <ProductTab/>
          <BlogPost/>
          <CardDetail/>
          <Logo/>
          <FootBandage />
        </div>
    );
}

export default ProductDetailPage;
