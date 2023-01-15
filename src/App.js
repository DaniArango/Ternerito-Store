import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import { ProductsProvider } from "./context/ProductsState";

function App() {
  return (
    <div>
      <ProductsProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  );
}

export default App;
