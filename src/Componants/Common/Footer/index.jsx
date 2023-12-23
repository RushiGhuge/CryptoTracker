import React from 'react';
import './style.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import CallIcon from '@mui/icons-material/Call';
import { useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation();
    const isHomePage = location.pathname === '/'

    if (isHomePage) {
        return
    }

    return (
        <div className='footer-container'>
            <div className='left-footer'>
                <h3>Copyright © 2024. All rights are reserved</h3>
            </div>
            <div className='right-footer'>
                <CallIcon />
                <ShareIcon />
                <GitHubIcon />
            </div>
        </div>
    );
}

export default Footer;
