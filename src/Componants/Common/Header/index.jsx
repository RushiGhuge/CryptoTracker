import React from "react";
import './style.css'
import { NavLink } from "react-router-dom";
import SwipeableTemporaryDrawer from "./Drawer";
import ThemeSwitchBtn from "./ThemeSwitchBtn";

const Header = () => {



  return (
    <div className='navbar'>
      <div className='left-nav'>
        <h1>CryptoTracker<span>.</span></h1>
      </div>

      <div className="right-nav">

        <ThemeSwitchBtn/>

        <NavLink to="/">Home</NavLink>

        <NavLink to="/compare">Compare</NavLink>

        <NavLink to="/dashbord">
          <button className="dashbord-btn">Dashboard</button>
        </NavLink>
      </div>

      <div className="hand-burder">
        <SwipeableTemporaryDrawer />
      </div>

    </div>
  );
};

export default Header;
