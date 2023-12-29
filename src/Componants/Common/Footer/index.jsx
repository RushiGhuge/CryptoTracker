import React from 'react';
import './style.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import { useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';

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
                <a href="https://rushighuge.github.io/Major-Projects/PersonelPortfolio/index.html#" target='_blank'>
                    <IconButton sx={{ color: 'var(--white)' }}> <CallIcon /></IconButton>
                </a>

                <a href="https://www.linkedin.com/in/rushikeshghuge/" target='_blank'>
                    <IconButton sx={{ color: 'var(--white)' }}><LinkedInIcon /></IconButton>
                </a>

                <a href="https://github.com/RushiGhuge" target='_blank'>
                    <IconButton sx={{ color: 'var(--white)' }}><GitHubIcon /></IconButton>
                </a>
            </div>
        </div>
    );
}

export default Footer;
