import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


const Blog = () => {

  const ref = React.createRef();

  return (
    <div>
      <div ref={ref} className="fw-bold container mt-5 border border-5 border-warning rounded-5 p-4">
        <p>
          1. The differences between uncontrolled and controlled components.
        </p>
        <p>
          Ans: Uncontrolled components refer to elements in a system that are
          not directly managed or manipulated by the user, but controlled
          components are those that can be managed or manipulated by the user.
        </p>

        <p className="mt-5">2. How to validate React props using PropTypes?</p>
        <p>
          Ans: Import PropTypes at the top of your file. Define PropTypes for
          your component by adding a propTypes object to it, with the required
          data types. If a prop is required, add ".isRequired" to the PropTypes
          definition. React will now give warnings in the console if the props
          you pass to the component are of the wrong type or missing a required
          prop.
        </p>
        <p className="mt-5">3. The difference between nodejs and express js.</p>
        <p>
          Ans: Node.js is a JavaScript runtime that allows developers to run
          JavaScript code on the server-side, while Express.js is a web
          framework built on top of Node.js that provides additional
          functionality for building web applications. Node.js provides the core
          functionality for running JavaScript on the server, while Express.js
          provides a set of tools and features that make it easier to build web
          applications
        </p>

        <p className="mt-5">
          4. What is a custom hook, and why will you create a custom hook??
        </p>
        <p>
          Ans: A custom hook is a reusable function in React that encapsulates
          and shares common functionality across multiple components. Developers
          create custom hooks to improve code organization, reduce duplication,
          increase reusability, and make code easier to maintain.
        </p>
      </div>
      <div className="mt-4 container mx-auto text-center"><Pdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => <button className="btn btn-warning" onClick={toPdf}>Download as Pdf</button>}
      </Pdf></div>
    </div>
  );
};

export default Blog;
