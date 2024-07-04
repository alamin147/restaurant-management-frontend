import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="mt-3 container d-flex row row-cols-1 row-cols-md-2 g-0">
      <div className="bg-warning py-5 px-4">
        <h2>WHY US</h2>
        <p>
          Welcome to ChopStick House, where we bring you the authentic flavors
          of Chinese cuisine. Our restaurant has been serving delicious food to
          locals and tourists alike for over a decade, and we take pride in
          offering an exceptional dining experience. Our menu features a wide
          variety of dishes that showcase the best of Chinese cuisine, from
          classic favorites like sweet and sour chicken and egg fried rice to
          more adventurous options like mapo tofu and spicy Sichuan noodles. We
          use only the freshest ingredients and authentic spices to ensure that
          every dish is bursting with flavor. At ChopStick House, we believe
          that great food should be accompanied by great service. Our friendly
          staff are dedicated to providing you with the best possible
          experience, whether you're dining in our restaurant or ordering
          takeout. We strive to create a welcoming and comfortable atmosphere
          that will make you feel right at home.
        </p>
      </div>
      <div>
        <img
          className="imgAbt img-fluid"
          src="https://img.freepik.com/free-photo/food-mix-salad-noodles-grillea-chicken-garlic-greena-top-view_141793-15488.jpg?w=1380&t=st=1683021124~exp=1683021724~hmac=3f2cb8c4454d2c61134f7d73ec54049a8002893f096f2e9dcd05eca9d9bd1e0e"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
