import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="mt-5 container-fluid bg-danger te py-5 text-white">
        <div className=" container mx-auto row">
          <div className="col-md-4">
            <h5 className="mb-3 fw-bold">ChopStick House</h5>
          </div>
          <div className="col-md-3">
            <h5>Useful Links</h5>
            <ul className="mb-3 list-unstyled">
              <li>Home</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="mb-3 col-md-2">
            <h5>Address</h5>
            <p>123 Main St.</p>
            <p>Anytown, China</p>
            <p>(123) 456-7890</p>
          </div>
          <div className="col-md-3 d-flex align-items-center">
            <div>
              <input
                type="text"
                placeholder="message us"
                className="border-0 py-2 rounded ps-3 me-2"
              />
            </div>
            <div>
              <button className="btn btn-warning">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
