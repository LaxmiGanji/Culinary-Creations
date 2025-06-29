import React, { Component, useState, useEffect } from "react";
import "../App.css";
import { Button } from "./Button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./HeroSection.css";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import Testimonials from "./testimonials";
import Features from "../Login/src/components/about/features";
import { getRecipesByIngredients } from "../data/recipes";

var cuisine_list = [
  "African",
  "Asian",
  "Australian",
  "Canadian",
  "Chineese",
  "European",
  "French",
  "Indian",
  "Italian",
  "Japanese",
  "Korean",
  "American",
  "Mediterranean",
  "Mexican",
  "Eastern",
  "Thai",
  "USA",
];
var temp = JSON.parse(localStorage.getItem("recipe_list")) || [];

function HeroSection() {
  const [recipes, setRecipes] = useState(temp);
  const [uploadInput, setUploadInput] = useState();
  const [currState, setCurrState] = useState(0);
  const [cuisine, setCuisine] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ingInvalidInput, setIngInvalidInput] = useState(false);

  var btn1 = false;
  var btn2 = false;
  var btn3 = false;

  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const ingredients = event.target[0].value.toLowerCase().trim();

    if (ingredients.length === 0 || hasNumber(ingredients)) {
      setIngInvalidInput(true);
    } else {
      setIngInvalidInput(false);
      localStorage.setItem("recipe_list", JSON.stringify([]));
      setIsLoading(true);
      setInvalid(false);

      // Get recipes from our local data first
      const localRecipes = getRecipesByIngredients(ingredients);
      if (localRecipes.length > 0) {
        setRecipes(localRecipes);
        setIsLoading(false);
        return;
      }

      // If no local recipes found, try the API
      try {
        console.log("Submitting ingredients:", ingredients);

        const response = await fetch("/ingredient", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ ingredients: ingredients }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        console.log("Response:", json);

        if (json.error) {
          console.error("Server error:", json.error);
          setInvalid(true);
        } else {
          const recipes = json.result ? json.result[0] : [];
          setRecipes(recipes);
          localStorage.setItem("recipe_list", JSON.stringify(recipes));

          if (recipes.length === 0) {
            setInvalid(true);
          }
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setInvalid(true);
      } finally {
        setIsLoading(false);
      }
    }
  }

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  

  async function handleChange(event) {
    // Handle cuisine change
    console.log(cuisine);
    if (cuisine === "blank" || cuisine === "") {
    } else {
      setIngInvalidInput(false);
      localStorage.setItem("recipe_list", JSON.stringify([]));
      setIsLoading(true);
      event.persist();
      console.log("making request");
      console.log(cuisine);
      const response = await fetch("/cuisine", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(cuisine),
      });

      const json = await response.json();
      console.log(json);
      setRecipes(json[0]);
      localStorage.setItem("recipe_list", JSON.stringify(json[0]));
      setIsLoading(false);
    }
  }

  function onClickSearchbox() {
    if (currState == 1) {
      return (
        <div>
          <form
            action="javascript:void(0);"
            onSubmit={handleSubmit}
            method="POST"
          >
            <input
              className="hero-input"
              type="text"
              name="ingredients"
              placeholder="Enter ingredients..."
            />
            <button className="hero-button" type="submit">
              Search
            </button>
          </form>
        </div>
      );
    }

    

    if (currState == 3) {
      return (
        <form
          onSubmit={handleChange}
          action="javascript:void(0);"
          method="POST"
        >
          <select
            className="select-class"
            onChange={onCuisineChange}
            name="cars"
            id="cars"
            required
          >
            <option value="blank" selected="selected">
              Choose a Cuisine
            </option>
            {cuisine_list.map((ele) => (
              <option value={ele}>{ele}</option>
            ))}
          </select>
          <input className="hero-button3" type="submit" value="Submit" />
        </form>
      );
    }
  }

  function updateState(new_state) {
    setInvalid(false);
    setIngInvalidInput(false);
    setCurrState(new_state);
  }

  function onCuisineChange(event) {
    setCuisine(event.target.value);
  }

  useEffect(() => {}, [recipes]);
  useEffect(() => {}, [uploadInput]);
  useEffect(() => {}, [currState]);
  useEffect(() => {}, [cuisine]);
  useEffect(() => {}, [isLoading]);
  useEffect(() => {}, [invalid]);

  return (
    <div>
      <div className="hero-container">
        <video src="/videos/video.mp4" autoPlay loop muted />

        <h1>Smart Cooking Starts Here-</h1>
        <h1>Recipes Made Just for You.</h1>

        <p>How do you want to search?</p>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={() => updateState(1)}
            isSelected={btn1}
          >
            BY INGREDIENTS
          </Button>

          

          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={() => updateState(3)}
            isSelected={btn3}
          >
            BY CUISINE
          </Button>
        </div>

        <div className="search-container">{onClickSearchbox()}</div>

        <div>
          {isLoading === true ? (
            <h1
              style={{
                position: "relative",
                paddingTop: "15%",
                color: "white",
              }}
              className="tc"
            >
              Loading...
            </h1>
          ) : null}
        </div>

        <div>
          {ingInvalidInput === true ? (
            <h1
              style={{
                position: "relative",
                paddingTop: "15%",
                color: "white",
              }}
              className="tc"
            >
              Invalid Input!
            </h1>
          ) : null}
        </div>
      </div>

      <div>
        {invalid === true ? <h1 className="tc">No Recipes Found!</h1> : null}
      </div>

      <div>
        {recipes.length > 0 ? (
          <div className="center back-color">
            <h1 className="testimonial-head">Recipes</h1>
            <hr className="fancy-line" />
          </div>
        ) : null}
      </div>

      <div>
        <Cards recipes={recipes} />
      </div>

      <div>
        <Features />
      </div>

      <div>
        <Testimonials />
      </div>
    </div>
  );
}

export default HeroSection;
