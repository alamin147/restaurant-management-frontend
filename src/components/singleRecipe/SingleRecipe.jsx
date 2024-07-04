import React from "react";

const SingleRecipe = ({ recipe }) => {
  // console.log("res",recipe)
  return (
    <div className="col">
      <div className="card">
        <img src={recipe.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <p className="card-text">{recipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
