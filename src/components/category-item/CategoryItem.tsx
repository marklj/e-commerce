import React from "react";
import "./categoryItem.styles.scss";

type CategoryItemProps = {
  title: string;
  imageUrl: string;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ title, imageUrl }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
