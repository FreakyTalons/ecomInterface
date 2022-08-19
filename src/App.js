import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import LoginSignUp from "./Components/LoginSignUp";
import Page404 from "./Components/Page404";
import AppContext from "./AppContext";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [productList, setProductList] = useState([]);
  const [currentProd, setCurrentProd] = useState(0);
  const [currentUser, setCurrentUser] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  //retrieve products list

  const handleClick = () => {
    if (isLoggedIn) {
      window.localStorage.removeItem("cart");
      window.localStorage.removeItem("orders");
      window.localStorage.removeItem("wishlist");
      window.localStorage.removeItem("token");
    }
    setLoggedIn(false);
    setCartCount(0);
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          isLoggedIn,
          setLoggedIn,
          productList,
          setProductList,
          currentProd,
          setCurrentProd,
          setCurrentUser,
          currentUser,
          setCartCount, cartCount
        }}
      >
        <BrowserRouter>
          <div className="navbar">
            <div className="navContents">
              <p>ShopKart.</p>
              <div className="rightPanelLinks">
                <Link className="disp2" to="/">
                  Product Catalogue
                </Link>
                <Link onClick={handleClick} to="/loginSignUp">
                  {isLoggedIn ? "Logout" : "Login"}
                </Link>
                <Link className="disp3" to="/cart">
                  Cart
                  <i
                    style={{ marginLeft: "10px" }}
                    className="fa-solid fa-cart-shopping"
                  ></i>
                  <sup>{cartCount}</sup>
                </Link>
                <Link className="disp4" to="/cart">
                  <i
                    style={{ marginLeft: "10px" }}
                    className="fa-solid fa-cart-shopping"
                  ></i>
                  <sup>{cartCount}</sup>
                </Link>
              </div>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/loginSignUp" element={<LoginSignUp />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
