import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";

export default function ProductDetails() {
  const { productList, currentProd, isLoggedIn, setCartCount} = useContext(AppContext);
  const [item, setItm] = useState({});
  const [isFav, setIsFav] = useState(false);
  const [added, setAdded] = useState(false);

  let navigate = useNavigate();

  const displayFunc = (product) => {
    if (product.id === currentProd) {
      let tempItem = {
        image: product.image,
        title: product.title,
        rating: product.rating,
        amount: product.amount,
        description: product.description,
      };
      setItm(tempItem);
    }
  };

  useEffect(() => {
    productList.forEach(displayFunc);
  }, []);

  
  const handleCartClick = () => {
    if (isLoggedIn) {
      setAdded(true)
      //add to cart function
      setCartCount(prevValue => prevValue+1)
    } else {
      navigate("/loginSignUp");
    }
  };

  const handleFavClick = () =>
  {
    if(!isFav)
    {
      if (isLoggedIn) {
        setIsFav(true)
        //add to fav function
      } else {
        navigate("/loginSignUp");
      }
    }
    else
    {
      setIsFav(false)
      console.log("removed from favs");
      //function to remove from favs
    }
    
  }

  return (
    <div className="deets">
      <img src={item.image} alt="Product Image" />
      <div className="deets--contents">
        <h2 className="title">{item.title}</h2>
        <h2><i class="customIcon fa-solid fa-star"></i>{item.rating}</h2>
        <h2><i class="customIcon fa-solid fa-tag"></i>₹{item.amount}</h2>
        <p>{item.description}</p>
        <div className="options">
            <button onClick={handleCartClick} className="bt">{added?"ADDED!":"ADD TO CART"}</button>
            <button onClick={handleFavClick} className="bt">ADD TO FAVORITES</button>
            <button onClick={() => {navigate("/")}} className="bt">GO BACK</button>
        </div>
      </div>
    </div>
  );
}
