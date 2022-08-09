import React, { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import ProductCard from "./ProductCard";
import api from "../API/database";

export default function ProductList() {
  const { productList, setProductList } = useContext(AppContext);

  const retrieveProducts = async () => {
    const response = await api.get("/products");
    return response.data;
  };
  
  useEffect(() => {
    if(productList.length === 0)
    {
      const getProducts = async () => {
        const products = await retrieveProducts();
        if (products) {
          setProductList(products);
        }
      };
      getProducts();
    }
  }, [productList]);


  return (
    <div className="catalogue">
      {productList.map((product) => {
        return (
          <ProductCard
            id={product.id}
            key={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            amount={product.amount}
            description={product.description}
          />
        );
      })}
    </div>
  );
}