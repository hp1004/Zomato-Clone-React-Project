import React from "react";
import "./Card.scss";
import Dine from "../../assets/images/Dine-Out.png";
import Night from "../../assets/images/Night-Life.png";
import Online from "../../assets/images/Online-Food.png";

const Card = () => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={Online} alt="online-img" />
        <h1>Order Online</h1>
        <span>Stay home and order to your doorstep</span>
      </div>

      <div className="cardImg">
        <img src={Night} alt="night-img" />
        <h1>Nightlife and Clubs</h1>
        <span>Explore the city's top nightlife outlets</span>
      </div>

      <div className="cardImg">
        <img src={Dine} alt="dine-img" />

        <h1>Dinning</h1>
        <span>Views the city'sfavourite venues</span>
      </div>
    </div>
  );
};

export default Card;
