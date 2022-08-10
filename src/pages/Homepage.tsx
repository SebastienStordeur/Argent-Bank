import React from "react";
import FeaturedItem from "../components/FeaturedItems/FeaturedItem";
import Hero from "../components/Hero/Hero";

import data from "../components/FeaturedItems/data.json";

const Homepage: React.FC = () => {
  return (
    <main id="main">
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {data.map((featuredItem) => {
          return (
            <FeaturedItem
              title={featuredItem.title}
              description={featuredItem.description}
              image={featuredItem.image}
              key={featuredItem.id}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Homepage;
