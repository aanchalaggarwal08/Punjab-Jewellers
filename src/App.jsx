import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CollectionsPage from "./pages/CollectionsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/collections"
          element={<CollectionsPage />}
        />
        <Route
           path="/collections/:category"
            element={<CategoryPage />}
                 />
        <Route
           path="/product/:id"
           element={<ProductPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />
        <Route path="/wishlist" element={<WishlistPage />} />
        
      </Routes>

    </BrowserRouter>

  );
}

export default App;