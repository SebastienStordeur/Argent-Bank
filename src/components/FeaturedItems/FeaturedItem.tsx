import React from "react";

interface FeaturedItemI {
  title: string;
  description: string;
  image: string;
}

const FeaturedItem: React.FC<FeaturedItemI> = (props: FeaturedItemI) => {
  return (
    <div className="feature-item">
      <img src={props.image} alt="" className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default FeaturedItem;
