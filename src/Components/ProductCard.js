import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";
import useAddProduct from "./useSetArrays";

export default function ProductCard(props) {

  let navigate = useNavigate();
  const[isFav, setIsFav] = useState(false);
  const { setCurrentProd, isLoggedIn, setCartCount} = useContext(AppContext);
  const [setItem ] = useAddProduct();

  const handleClick = () => {
    setCurrentProd(props.id);
    navigate("/productDetails");
  };

  const handleCartClick = () => {
    if (isLoggedIn) {
      //function to add to cart
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
        //add to favorite function
        setIsFav(true)
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
    <div className="card">
      <img onClick={handleClick} src={props.image} alt="Product Image" />
      <h3>{props.title}</h3>
      <div className="disp0 options">
        <p><i className="customIcon fa-solid fa-star"></i>{props.rating}</p>
        <p><i className="customIcon fa-solid fa-tag"></i>₹{props.amount}</p>
        <p onClick={handleCartClick}><i className="customIcon fa-solid fa-cart-arrow-down fa-2x"></i></p>
        <p onClick={handleFavClick}>{isFav?<i className="customIcon--pink fa-solid fa-heart fa-2x"></i>:<i className="customIcon fa-solid fa-heart-circle-plus fa-2x"></i>}</p>
      </div>
      <div className="disp1">
        <div className="options">
            <p><i className="customIcon fa-solid fa-star"></i>{props.rating}</p>
            <p><i className="customIcon fa-solid fa-tag"></i>₹{props.amount}</p>
        </div>
        <div className="options">
            <p onClick={handleCartClick}><i className="customIcon fa-solid fa-cart-arrow-down fa-2x"></i></p>
            <p onClick={handleFavClick}>{isFav?<i className="customIcon--pink fa-solid fa-heart fa-2x"></i>:<i className="customIcon fa-solid fa-heart-circle-plus fa-2x"></i>}</p>
        </div>
      </div>
    </div>
  );
}
