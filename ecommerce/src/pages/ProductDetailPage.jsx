import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Logo from "../components/Logo";
import HeaderShopPage from "../layout/HeaderShopPage";
function ProductDetailPage() {
    return (
        <div>
          <HeaderShopPage/>
          <Header />
          <section>
          <Logo/>
          </section>
          <Footer />
        </div>
      );
    };
    export default ProductDetailPage;