import React from "react";
import './style.css'
import { NavLink } from "react-router-dom";
import SwipeableTemporaryDrawer from "./Drawer";
import { ThemeContext } from "../../../Context/ThemeContext";
import { useContext } from "react";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

const Header = () => {

  const { themeMode, toggleThemeMode } = useContext(ThemeContext)
  console.log(themeMode);

  return (
    <div className='navbar'>
      <div className='left-nav'>
        <h1>CryptoTracker<span>.</span></h1>
      </div>

      <div className="right-nav">
        <Tooltip title={themeMode == 'dark' ? 'Light' : 'Dark'} arrow>
          <IconButton onClick={toggleThemeMode}>
            <span style={{ color: 'var(--white', display: 'grid', placeItems: 'center' }}>
              {themeMode == 'dark' ? <Brightness7Icon /> : <DarkModeIcon />}
            </span>
          </IconButton>
        </Tooltip>

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
