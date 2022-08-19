import {useEffect, useState} from 'react';
import { nanoid } from "nanoid";

export default function useSetArrays () {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [item, setItem] = useState({
        type:"",title:"", amount:"", image:""
    })
    useEffect(() =>{
        let itmID = nanoid();
        if(item.type==="cart")
        {
            let newObj = [...cart, {itmId:itmID, title:item.title, amount:item.amount, image:item.image}]
            console.log(newObj);
            setCart(newObj);
            console.log(cart);
            console.log("ran");
        }
        if(item.type==="wishlist")
        {
            let newObj = [...wishlist, {itmId:itmID, title:item.title, amount:item.amount, image:item.image}]
            setWishlist(newObj)
            console.log(wishlist);
        }
    },[cart, wishlist]);
    return [setItem, setCart, setWishlist];
} 