import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={chef.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{chef.name}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <p className="card-text">Experinces: {chef.experience} Years</p>
              <p className="card-text">
                Number of recipes: {chef.numberRecipes.length}
              </p>
              <p className="card-text">Likes: {chef.likes}</p>
            </div>
            <div>
              <Link to={`/chefs/${chef.id}`}>
                <button className="btn btn-warning">View recipes</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
