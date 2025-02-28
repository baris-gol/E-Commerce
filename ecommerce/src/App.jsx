import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
        {/* <Route path="/shop" element={<ShopPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
}
export default App;