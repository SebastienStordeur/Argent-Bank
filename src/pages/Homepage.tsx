import React from "react";
import Hero from "../components/Hero/Hero";

const Homepage = () => {
  return (
    <main id="main">
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
      </section>
    </main>
  );
};

export default Homepage;
