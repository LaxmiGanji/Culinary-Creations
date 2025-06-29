import React, { Component } from "react";
import "./info.css";
import img1 from "./info.jpg";

function Info(){
  return (
    <div className="background-1">
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <img src={img1} alt="img"/>
      </div>
      <div className="row left col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <h1 className="info-head">About Us</h1>
        <hr className="fancy-line-1"/>
        <p className="text">At Culinary Creations, we understand how frustrating it can be to want to cook something delicious but not have a fully stocked pantry. Sometimes, you come across a mouth-watering dish and wish you could recreate it—but don’t know where to begin.
That’s where we come in. Culinary Creations empowers users to discover tasty, creative, and home-cook-friendly recipes based on the ingredients they already have on hand. Whether you're craving something quick, healthy, unique, or beautifully presented, Culinary Creations helps you make the most of your kitchen—no need for fancy store runs or complicated ingredients.</p>
      </div>
    </div>
  );
  }

export default Info;
