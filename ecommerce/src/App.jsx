import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import ShopPage from "./pages/ShopPage";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      
        {/* İleride diğer sayfalar eklenecekse: */}
        {/* <Route path="/shop" element={<ShopPage />} /> */}
        {<Route path="/shop" element={<ShopPage/> }/>}
      </Routes>
    </Router>
  );
}
export default App;