import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, Price, rating }) {
 const [{ basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
    //   Remove from the basket...
       dispatch ({
           type: "REMOVE_FROM_BASKET",
           id: id,
       });
    };



    return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong> &#8377;</strong>
          <strong>{Price}</strong>
        </p>

        <div className="Checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#9733;</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
