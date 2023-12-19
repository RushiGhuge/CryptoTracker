import { IconButton, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const GetToTopButton = () => {

    const [show, setShow] = useState(false);

    // hanse scroll function ....
    const handelScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY < 100) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    const handelToGetTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        // only first time
        window.addEventListener('scroll', handelScroll)
        // clean up fun
        return () => {
            window.removeEventListener('scroll', handelScroll);
        }
    }, [])


    if (!show) {
        return;
    }

    return (

        <div className='getToTopBtn'>
            <Tooltip title="Scroll To Top" arrow>
                <IconButton onClick={handelToGetTop} color="secondary" aria-label="add an alarm">
                    <KeyboardArrowUpIcon fontSize="large" className='arrow' />
                </IconButton>
            </Tooltip>

        </div>
    );
}

export default GetToTopButton;
