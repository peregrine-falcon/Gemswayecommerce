import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home__Image" src="background.jpg" alt="bannerPicture" />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1"
          title="Glamorous LCT Gold Plated Wedding Jewellery Pearl Choker Necklace Set Combo For Women"
          Price={27790}
          rating={5}
          image="j1.jpg"
        />

        <Product
          id="12"
          title="Delightful Gold Plated Wedding Jewellery Kundan Choker Necklace Set For Women"
          Price={34900}
          rating={3}
          image="j2.jpg"
        />

        <Product
          id="123"
          title="Glamorous LCT Gold Plated Wedding Jewellery Pearl Choker Necklace Set Combo For Women"
          Price={27790}
          rating={5}
          image="j3.jpg"
        />

        <Product
          id="1234"
          title="Delightful Gold Plated Wedding Jewellery Kundan Choker Necklace Set For Women"
          Price={34900}
          rating={3}
          image="j4.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345"
          title="YouBella Jewellery Set for Women Tibetan Pendant Necklace with Earrings for Women & Girls (Gift) Tribal Necklace Jewellery Beads Necklace"
          Price={11000}
          rating={4}
          image="j5.jpg"
        />

        <Product
          id="123456"
          title="Valentine Gift By Shining Diva Italian Designer Non Precious Metal Jewellery Set for Women (Blue)"
          Price={44900}
          rating={4}
          image="j6.jpg"
        />

        <Product
          id="1234567"
          title="Senco Gold Coconut Shell and 22K Gold Fusion Jewellery Set"
          Price={26500}
          rating={5}
          image="j7.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345678"
          title="Glamorous LCT Gold Plated Wedding Jewellery Pearl Choker Necklace Set Combo For Women"
          Price={27790}
          rating={5}
          image="j1.jpg"
        />

        <Product
          id="123456789"
          title="Delightful Gold Plated Wedding Jewellery Kundan Choker Necklace Set For Women"
          Price={34900}
          rating={3}
          image="j2.jpg"
        />

        <Product
          id="1234567891"
          title="Glamorous LCT Gold Plated Wedding Jewellery Pearl Choker Necklace Set Combo For Women"
          Price={27790}
          rating={5}
          image="j3.jpg"
        />

        <Product
          id="12345678912"
          title="Delightful Gold Plated Wedding Jewellery Kundan Choker Necklace Set For Women"
          Price={34900}
          rating={3}
          image="j4.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
