import React from 'react';
import { ThemeContext } from "../../../Context/ThemeContext";
import { useContext } from "react";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

const ThemeSwitchBtn = () => {

    const { themeMode, toggleThemeMode } = useContext(ThemeContext)
    console.log(themeMode);

    return (
        <div>
            <Tooltip title={themeMode == 'dark' ? 'Light' : 'Dark'} arrow>
                <IconButton onClick={toggleThemeMode}>
                    <span style={{ color: 'var(--white', display: 'grid', placeItems: 'center' }}>
                        {themeMode == 'dark' ? <Brightness7Icon /> : <DarkModeIcon />}
                    </span>
                </IconButton>
            </Tooltip>
        </div>
    );
}

export default ThemeSwitchBtn;
