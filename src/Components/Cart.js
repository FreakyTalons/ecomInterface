import React, { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../AppContext';
import checkMark from '../assets/check-mark-animate.gif'



export default function Cart(){
    const {cartCount} = useContext(AppContext);
    let navigate = useNavigate();

    const [displaySuccessMsg, setDisplaySuccessMsg] = useState(false)

    const handleBuyClick = () =>
    {
        setDisplaySuccessMsg(true)
        // post method to add cart to orders 
    }

    return(<div>
    {cartCount === 0?
            <div className='errDiv'>
                <i class="customIcon--light fa-solid fa-face-sad-tear fa-3x"></i>
                <br/>
                <p>Your cart is empty, let's get back to shopping! 🛍️</p>
                <button className='bt' onClick={() => {navigate("/")}}>GO BACK</button>
            </div>:
            <>
                <div className='btholder'>
                    <button onClick={handleBuyClick} className='bt'>BUY NOW</button>
                    <button onClick={() => {navigate("/")}} className='bt'>GO BACK</button>
                </div>
                <div style={displaySuccessMsg?{diplay:"block"}:{display:"none"}} className='successMsg'>
                    <i onClick={() => {setDisplaySuccessMsg(false)}}  className="x-mark customIcon fa-solid fa-xmark fa-2x"></i>
                    <br/>
                    <img className='successImg' src={checkMark}/>
                    <h2>Order Placed!</h2>
                </div>
            </>}
    </div>)

}

//
