import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, Price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add items to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        Price: Price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong> &#8377;</strong>
          <strong>{Price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>&#9733;</p>
            ))}
        </div>
      </div>
      <img src={image} alt="productimage" />
      <button onClick={addToBasket} className="product__button">Add To Basket</button>
    </div>
  );
}

export default Product;
