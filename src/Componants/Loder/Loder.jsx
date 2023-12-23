import { Backdrop } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loder = () => {
    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: '300' }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

export default Loder;
