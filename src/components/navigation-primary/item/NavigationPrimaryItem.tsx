import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavigationPrimaryItem.styles.scss";

export type NavigationPrimaryItemProps = {
  label: string;
  href: string;
};

const NavigationPrimaryItem: React.FC<NavigationPrimaryItemProps> = ({
  label,
  href,
}) => {
  return (
    <li className="primary-navigation-item">
      <NavLink to={href}>{label}</NavLink>
    </li>
  );
};

export default NavigationPrimaryItem;
