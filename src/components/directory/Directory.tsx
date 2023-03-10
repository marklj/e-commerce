import React from "react";
import { Category } from "../../routes/home/HomePage";
import CategoryItem from "../category-item/CategoryItem";
import "./directory.styles.scss";

type DirectoryProps = {
  categories: Category[];
};

const Directory: React.FC<DirectoryProps> = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
