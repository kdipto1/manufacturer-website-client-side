import React from 'react';

const Portfolio = () => {
  return (
    <section className="container mx-auto h-screen">
      <h2>Name: Dipto Karmaker</h2>
      <h2>Email: kdipto2@gmail.com</h2>
      <h2>
        Education: ssc: science, diploma: electrical engineering(session:16/17)
      </h2>
      <h2>Technologies that i know as a web developer:</h2>
      <p>HTML, CSS, JAVASCRIPT, BOOTSTRAP, TAILWIND, REACT</p>
      <h2>
        Website links:{" "}
        <a
          className="btn btn-xs"
          href="https://assignment-11-11.web.app/"
          target="_blank"
        >
          CarHouse
        </a>
        , 
        <a
          className="btn btn-xs"
          href="https://assignment-10-10.web.app/"
          target="_blank"
        >
          DentCare
        </a>
        , 
        <a
          className="btn btn-xs"
          href="https://bd-apple-store.netlify.app/"
          target="_blank"
        >
          Apple Store
        </a>
      </h2>
    </section>
  );
};

export default Portfolio;