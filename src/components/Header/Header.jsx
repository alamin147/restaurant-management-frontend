import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const { logOut, user, userphoto, username } = useContext(AuthContext);

  console.log("header", user, username, userphoto);
  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <nav className="container navbar navbar-expand-lg bg-body-tertiary d-flex align-items-center">
      <div className="container-fluid">
        <Link to="/" className="text-decoration-none">
          <p className="fw-bold navbar-brand" href="#">
            ChopStick House
          </p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="" to="/">
                <p className="nav-link" aria-current="page" href="#">
                  Home
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="" to="/blog">
                <p className="nav-link" href="#">
                  Blog
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="" to="/login">
                {" "}
                <p className="nav-link" aria-current="page" href="#">
                  Login
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="" to="/register">
                <p className="nav-link" aria-current="page" href="#">
                  Register
                </p>
              </NavLink>
            </li>
          </ul>
          <div className="">
            <div className="">
              {user ? (
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <img
                      title={user?.displayName}
                      src={user?.photoURL}
                      className="customUserImg img-fluid img-thumbnail rounded rounded-5"
                      alt=""
                    />
                  </div>
                  <div>
                    {" "}
                    <NavLink>
                      <button
                        className="btn btn-warning"
                        onClick={handleLogOut}
                        type=""
                      >
                        Log out
                      </button>
                    </NavLink>
                  </div>
                </div>
              ) : (
                <NavLink to="/login">
                  <button className="btn btn-warning">Login</button>
                </NavLink>
              )}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
