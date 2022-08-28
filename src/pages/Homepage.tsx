import React from "react";
import FeaturedItem from "../components/FeaturedItems/FeaturedItem";
import Hero from "../components/Hero/Hero";

const Homepage: React.FC = () => {
  return (
    <main id="main">
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeaturedItem
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          image="../src/assets/icon-chat.png"
        />
        <FeaturedItem
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
          image="../src/assets/icon-money.png"
        />
        <FeaturedItem
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
          image="../src/assets/icon-security.png"
        />
      </section>
    </main>
  );
};

export default Homepage;
