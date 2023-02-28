import React from "react";
import { Link } from "react-router-dom";
import NavigationPrimaryItem, {
  NavigationPrimaryItemProps,
} from "../item/NavigationPrimaryItem";
import "./NavigationPrimary.styles.scss";

const primaryNavItems: NavigationPrimaryItemProps[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
];

const NavigationPrimary = () => {
  return (
    <ul className="primary-navigation">
      {primaryNavItems.map((nav) => (
        <NavigationPrimaryItem
          key={nav.label}
          label={nav.label}
          href={nav.href}
        />
      ))}
    </ul>
  );
};

export default NavigationPrimary;
