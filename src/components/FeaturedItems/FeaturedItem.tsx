import { FC } from "react";

interface FeaturedItemProps {
  title: string;
  description: string;
  image: string;
}

const FeaturedItem: FC<FeaturedItemProps> = ({ image, title, description }) => {
  return (
    <div className="feature-item">
      <img src={image} alt="icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeaturedItem;
