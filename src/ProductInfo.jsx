import React from 'react'
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductInfo = () => {
    const { id } = useParams();
    console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://github.com/ankitsingh2633/data/blob/main/list.jsx/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    
       <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  )
}

export default ProductInfo
