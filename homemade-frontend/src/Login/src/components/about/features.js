import React from "react";
import "./features.css";
import img1 from "./ing2rec.png";
import img3 from "./cuisine.jpg";

function Features() {
  return (
    <div className="background">
      <div className="center">
        <h1 className="feature-head">Features</h1>
        <hr className="fancy-line"/>
      </div>
      
      <div className="features-container">
        <div className="feature-item">
          <img className="img" src={img1} alt="Ingredients to Recipe"/>
          <h3>Ingredients to Recipe</h3>
          <p>Do you have limited ingredients, and don't know what to cook?</p>
        </div>

        <div className="feature-item">
          <img className="img" src={img3} alt="Different Cuisines"/>
          <h3>Different Cuisines</h3>
          <p>Do you want to try out delicious recipes of your favorite Cuisine?</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
