import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { key } from "localforage";
import SingleRecipe from "../singleRecipe/SingleRecipe";
import Sponsor from "../sponsorSection/Sponsor";
import About from "../aboutSection/About";
import { useParams } from "react-router-dom";
import Chef from "../chefs/Chef";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://chopstick.vercel.app/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    fetch("https://chopstick.vercel.app/sponsors")
      .then((res) => res.json())
      .then((data) => setSponsors(data));
  }, []);

  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://chopstick.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section className="mb-5 position-relative mt-3 imgBG text-white">
        <div className="position-absolute top-50 bg-danger py-4 pe-4 rounded rounded-3">
          <h1 className=" fw-bold ms-5">Welcome to our food corner</h1>
          <p className="ms-5">
            Intricate flavors. Time-honored techniques. Authentic Chinese
            cuisine.
          </p>
          <button type="button" className="ms-5 btn btn-warning">
            Explore Our Foods
          </button>
        </div>
      </section>

      {/* recipe */}

      <div className="text-center container">
        <h3>Featured Recipes</h3>
        <p>Get Your Desired food from Featured Recipes!</p>
      </div>
      <div className="container mx-auto row row-cols-1 row-cols-md-3 g-1">
        {recipes.map((recipe) => {
          return <SingleRecipe key={recipe.id} recipe={recipe}></SingleRecipe>;
        })}
      </div>

      {/* chef */}
      <div className="mt-5 text-center container">
        <h3>Our talented Chefs</h3>
        <p>Get Your Desired food from Featured Recipes!</p>
      </div>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="mt-3 container mx-auto row row-cols-1 row-cols-md-3 g-1">
        {chefs.map((chef) => {
          return <Chef key={chef.id} chef={chef}></Chef>;
        })}
      </div>

      {/* sponsors */}
      <div className="text-center container mt-5">
        <h3>Our Sponsors</h3>
        <p>Get Your Desired foods!</p>
      </div>
      <div className="img-fluid container mx-auto row row-cols-1 row-cols-md-5">
        {sponsors.map((sponsor) => {
          return <Sponsor key={sponsor.id} sponsor={sponsor}></Sponsor>;
        })}
      </div>
      {/* about */}
      <div className="mt-5 container">
        <h3 className="text-center">About Us</h3>
        <About></About>
      </div>
    </div>
  );
};

export default Home;
