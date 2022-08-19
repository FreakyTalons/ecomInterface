import React, { useState, useContext} from "react";
import api from "../API/database";
import AppContext from "../AppContext";
import { useNavigate } from "react-router-dom";
import useSetArrays from "./useSetArrays";

export default function LoginSignUp() {
  const { setCurrentUser, setLoggedIn } = useContext(AppContext);
  const [tempUser, setTempUser] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const [isExistingUser, setExistingUser] = useState(true);
  const [msg, setMsg] = useState("");

  const [setItem, setCart, setWishlist] = useSetArrays();

  let navigate = useNavigate();

  const changeExistingUser = () => {
    setMsg("");
    setExistingUser((prevValue) => !prevValue);
  };

  const handleClick = () => {
    setMsg("");
    //logging in existing
    if (isExistingUser) {
      const authUser = async (tempUser) => {
        const request = { email: tempUser.email, password: tempUser.password };
        try {
          const response = await api.post("/login", request);
          if (response.status === 200) {
            setCurrentUser({ ...response.data.user });
            window.localStorage.setItem("token", response.data.accessToken);
            let user = response.data.user;
            //function to set the cart
            //function to set order list
            //function to set wishlist
            console.log(response);
            setLoggedIn(true);
            navigate("/");
          }
        } catch (err) {
          setMsg(err.response.data + "!");
        }
      };
      authUser(tempUser);
    }
    
    // registereing new user
    else {
      const setUser = async (tempUser) => {
        const request = { ...tempUser, cart:[], wishlist:[], orders:[] };
        let response;
        try {
          response = await api.post("/users", request);
          if (response.status === 201) {
            const setOrders = async () => {
              const request = { email: tempUser.email, orders: []};
              const response = await api.post("/orders", request);
              console.log(response);
            };
            setOrders();
            changeExistingUser();
          }
        } catch (err) {
          setMsg(err.response.data + "!");
        }
      };
      setUser(tempUser);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTempUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  let loginCSS = { margin: "20vh auto 0 auto" };
  let signupCSS = { margin: "10vh auto 0 auto" };

  return (
    <div className="loginDiv" style={isExistingUser ? loginCSS : signupCSS}>
      <h1>{isExistingUser ? "Login" : "Sign Up"}</h1>
      {isExistingUser && <h3>Login to add products to your Cart!</h3>}
      {!isExistingUser && (
        <>
          <input
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            value={tempUser.fName}
            name="fName"
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            value={tempUser.lName}
            name="lName"
          />
        </>
      )}
      <input
        onChange={handleChange}
        type="email"
        placeholder="Your Email Address"
        value={tempUser.email}
        name="email"
      />
      <input
        onChange={handleChange}
        type="password"
        placeholder="Password"
        value={tempUser.password}
        name="password"
      />
      <p className="sgnMsg" onClick={changeExistingUser}>
        {isExistingUser
          ? "Don't have an account? Sign Up now!"
          : "Already a User? Sign In!"}
      </p>
      <p className="err">{msg}</p>
      <button onClick={handleClick}>
        {isExistingUser ? "Sign In" : "Sign Up"}
      </button>
    </div>
  );
}
