import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="mt-5 text-center mx-auto container">
      <img
        src="https://img.freepik.com/free-vector/404-error-background-flat-style_23-2147765204.jpg?w=826&t=st=1683104492~exp=1683105092~hmac=cd7a128f2e65082c60ef66803b16cc9b7a4c082831a95ed833b932ecb91bbc79"
        alt=""
      />

      <h1>
        <span className="text-danger">404</span> The page not found
      </h1>
      <Link className="" to="/">
        {" "}
        <button className="mt-3 mb-4 btn btn-warning">Go to Home page</button>
      </Link>
    </div>
  );
};

export default Error;
