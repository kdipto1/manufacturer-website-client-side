import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center text-4xl font-bold">Blogs</h1>
      <div>
        <h2 className="text-2xl">
          How will you improve the performance of a React Application?
        </h2>
        <p>
          <small>Ans:</small>To improve react application performance. we have
          to do these: <br />
          Keeping component state local where necessary, Memoizing React
          components to prevent unnecessary re-renders. Code-splitting in React
          using dynamic import. Windowing or list virtualization in React.
          Adding lazy loading in images.
        </p>
      </div>
      <div>
        <h2 className="text-2xl">
          What are the different ways to manage a state in a React application?
        </h2>
        <p>
          <small>Ans:</small>We can use react useState to manage local states.
          Or if we need to manage global states then we can use external
          packages like Redux,mobX and built in context API of react.
        </p>
      </div>
      <div>
        <h2 className="text-2xl">How does prototypical inheritance work?</h2>
        <p>
          <small>Ans:</small> The Prototypal Inheritance is a feature in
          javascript used to add methods and properties in objects. It is a
          method by which an object can inherit the properties and methods of
          another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
