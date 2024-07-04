import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';


const SingleChef = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();
  const [singleChef, setSingleChef] = useState([]);
  const from = location.state?.from?.pathname;

  useEffect(() => {
    fetch(`https://chopstick.vercel.app/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleChef(data));
  }, []);

  const [favourite1, setFavourite1] = useState(true);

  const disable1 = () => {
    setFavourite1(false);
    toast.success(
      `Successfully ${singleChef?.chef?.numberRecipes[0]?.name} added to favourite !`,
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };
  const [favourite2, setFavourite2] = useState(true);

  const disable2 = () => {
    setFavourite2(false);
    toast.success(
      `Successfully ${singleChef?.chef?.numberRecipes[1]?.name} added to favourite !`,
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };
  const [favourite3, setFavourite3] = useState(true);

  const disable3 = () => {
    setFavourite3(false);
    toast.success(
      `Successfully ${singleChef?.chef?.numberRecipes[2]?.name} added to favourite !`,
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };

  return (
    <div className="mt-5 container">
      <div className="d-flex align-items-center justify-content-between gap-5">
        <div>
          {" "}
          <LazyLoad height={200}>
          <img className="img-fluid" src={singleChef?.chef?.img} alt="" />
          </LazyLoad>
        </div>
        <div>
          <h3 className="mt-4">Chef: {singleChef?.chef?.name}</h3>
          <p>Bio of chef: {singleChef?.chef?.bio}</p>
          <p>Experiences: {singleChef?.chef?.experience} Years</p>
          <p>Likes: {singleChef?.chef?.likes}</p>
          <p>Number of recipes: {singleChef?.chef?.numberRecipes.length}</p>
        </div>
      </div>
      <h4 className="mt-5">Recipes by the chef</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src={singleChef?.chef?.numberRecipes[0]?.img}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {singleChef?.chef?.numberRecipes[0]?.name}
              </h5>
              <p className="card-text">
                <span className="fw-bold">Description:</span>{" "}
                {singleChef?.chef?.numberRecipes[0]?.description}
              </p>
              <p className="card-text">
                <span className="fw-bold">Cooking Method:</span>{" "}
                {singleChef?.chef?.numberRecipes[0]?.cookingMethod.slice(
                  0,
                  300
                )}
                ...
              </p>

              <p className="card-text">
                <span className="fw-bold">Ingredients:</span>{" "}
                <li>{singleChef?.chef?.numberRecipes[0]?.ingredients[0]}</li>
                <li>{singleChef?.chef?.numberRecipes[0]?.ingredients[1]}</li>
                <li>{singleChef?.chef?.numberRecipes[0]?.ingredients[2]}</li>
                <li>{singleChef?.chef?.numberRecipes[0]?.ingredients[3]}</li>
                <li>{singleChef?.chef?.numberRecipes[0]?.ingredients[4]}</li>
              </p>
              <p>Rating: {singleChef?.chef?.numberRecipes[0]?.rating}</p>
            </div>
            {favourite1 ? (
              <button onClick={disable1} className="btn btn-warning">
                Add to favourite
              </button>
            ) : (
              <button disabled className="btn btn-warning">
                Add to favourite
              </button>
            )}
            <ToastContainer></ToastContainer>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={singleChef?.chef?.numberRecipes[1]?.img}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {singleChef?.chef?.numberRecipes[1]?.name}
              </h5>
              <p className="card-text">
                <span className="fw-bold">Description:</span>{" "}
                {singleChef?.chef?.numberRecipes[1]?.description}
              </p>
              <p className="card-text">
                <span className="fw-bold">Cooking Method:</span>{" "}
                {singleChef?.chef?.numberRecipes[1]?.cookingMethod.slice(
                  0,
                  300
                )}
                ...
              </p>

              <p className="card-text">
                <span className="fw-bold">Ingredients:</span>{" "}
                <li>{singleChef?.chef?.numberRecipes[1]?.ingredients[0]}</li>
                <li>{singleChef?.chef?.numberRecipes[1]?.ingredients[1]}</li>
                <li>{singleChef?.chef?.numberRecipes[1]?.ingredients[2]}</li>
                <li>{singleChef?.chef?.numberRecipes[1]?.ingredients[3]}</li>
                <li>{singleChef?.chef?.numberRecipes[1]?.ingredients[4]}</li>
              </p>
              <p>Rating: {singleChef?.chef?.numberRecipes[1]?.rating}</p>
            </div>
            {favourite2 ? (
              <button onClick={disable2} className="btn btn-warning">
                Add to favourite
              </button>
            ) : (
              <button disabled className="btn btn-warning">
                Add to favourite
              </button>
            )}
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={singleChef?.chef?.numberRecipes[2]?.img}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {singleChef?.chef?.numberRecipes[2]?.name}
              </h5>
              <p className="card-text">
                <span className="fw-bold">Description:</span>{" "}
                {singleChef?.chef?.numberRecipes[2]?.description}
              </p>
              <p className="card-text">
                <span className="fw-bold">Cooking Method:</span>{" "}
                {singleChef?.chef?.numberRecipes[2]?.cookingMethod.slice(
                  0,
                  300
                )}
                ...
              </p>

              <p className="card-text">
                <span className="fw-bold">Ingredients:</span>{" "}
                <li>{singleChef?.chef?.numberRecipes[2]?.ingredients[0]}</li>
                <li>{singleChef?.chef?.numberRecipes[2]?.ingredients[1]}</li>
                <li>{singleChef?.chef?.numberRecipes[2]?.ingredients[2]}</li>
                <li>{singleChef?.chef?.numberRecipes[2]?.ingredients[3]}</li>
                <li>{singleChef?.chef?.numberRecipes[2]?.ingredients[4]}</li>
              </p>
              <p>Rating: {singleChef?.chef?.numberRecipes[2]?.rating}</p>
            </div>
            {favourite3 ? (
              <button onClick={disable3} className="btn btn-warning">
                Add to favourite
              </button>
            ) : (
              <button disabled className="btn btn-warning">
                Add to favourite
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
