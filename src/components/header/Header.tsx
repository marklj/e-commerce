import React from "react";
import NavigationPrimary from "../navigation-primary/container/NavigationPrimary";
import "./header.styles.scss";
import Logo from "../../assets/react.svg";
import { useNavigate, useNavigation } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const navigateHome = () => {
    nav("/");
  };
  return (
    <div className="header">
      <button className="logo-wrapper" onClick={navigateHome}>
        {<img src={Logo} alt="" />} React Shop
      </button>
      <NavigationPrimary />
    </div>
  );
};

export default Header;
