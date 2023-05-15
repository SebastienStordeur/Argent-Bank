import { FC } from "react";
import FeaturedItem from "../components/FeaturedItems/FeaturedItem";
import Hero from "../components/Hero/Hero";
import Chat from "../assets/icon-chat.png";
import Money from "../assets/icon-money.png";
import Security from "../assets/icon-security.png";

const Homepage: FC = () => {
  return (
    <main id="main">
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeaturedItem
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          image={Chat}
        />
        <FeaturedItem title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!" image={Money} />
        <FeaturedItem
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
          image={Security}
        />
      </section>
    </main>
  );
};

export default Homepage;
