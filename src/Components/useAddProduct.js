import {useEffect, useState} from 'react';
import { nanoid } from "nanoid";

export default function useAddProduct () {
    const [cart, setCart] = useState(window.localStorage.getItem('cart'));
    const [wishlist, setWishlist] = useState(window.localStorage.getItem('wishlist'));
    const [item, setItem] = useState({
        type:"",title:"", amount:"", image:""
    })
    useEffect(() =>{
        let itmID = nanoid();
        if(item.type==="cart")
        {
            let newObj = [...cart, {itmId:itmID, title:item.title, amount:item.amount, image:item.image}]
            setCart(newObj)
            console.log(cart);
            window.localStorage.setItem("cart", cart)
        }
        if(item.type==="wishlist")
        {
            let newObj = [...wishlist, {itmId:itmID, title:item.title, amount:item.amount, image:item.image}]
            setWishlist(newObj)
            console.log(wishlist);
            window.localStorage.setItem("wishlist", wishlist)
        }
    },[item])
    return setItem;
} 