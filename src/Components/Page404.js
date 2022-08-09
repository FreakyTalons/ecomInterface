import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page404(){
    let navigate = useNavigate()
    return(
            <div className='errDiv'>
                <i className="customIcon--light fa-solid fa-triangle-exclamation fa-4x"></i>
                <br/>
                <p>The page you're looking for could not be found! <br/> Let's get back to shopping! 🛍️</p>
                <button className='bt' onClick={() => {navigate("/")}}>Home</button>
            </div>
    )

}