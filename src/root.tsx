import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import NavigationPrimary from "./components/navigation-primary/container/NavigationPrimary";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
