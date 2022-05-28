import React from "react";

const Blogs = () => {
  return (
    <div className="container h-screen mx-auto mt-8 overflow-x-hidden">
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
          <small>Ans:</small> The prototypical inheritance refers to the ability
          to access object properties from another object. We use a JavaScript
          prototype to add new properties and methods to an existing object
          constructor. We can then essentially tell our JS code to inherit
          properties from a prototype. Prototypical inheritance allows us to
          reuse the properties or methods from one JavaScript object to another
          through a reference pointer function.
        </p>
      </div>
      <div>
        <h2 className="text-2xl">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts?
        </h2>
        <p>
          <small>Ans:</small>If we directly set products , instead of using
          setProducts then it will not update the state immediately . instead it
          will create a pending state transition , and accessing it after
          calling this method will only return the present value. So, by doing
          this we can lose control of the state across all components.
        </p>
      </div>
      <div>
        <h2 className="text-2xl">What is a unit test?</h2>
        <p>
          <small>Ans:</small>Unit testing is a type of software testing where
          individual units or components of a software are tested.
        </p>
        <h2 className="text-2xl">Why should write unit tests?</h2>
        <p>
          <small>Ans:</small>The purpose is to validate that each unit of the
          software code performs as expected. Unit Testing is done during the
          development (coding phase) of an application by the developers. Unit
          Tests isolate a section of code and verify its correctness. A unit may
          be an individual function, method, procedure, module, or object.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
