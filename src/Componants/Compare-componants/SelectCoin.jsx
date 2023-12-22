import React from 'react';
import Box from '@mui/material/Box';



const SelectCoin = ({ SelectedCoin, coins, setCoin }) => {


    const handleChange = (event) => {
        setCoin(event.target.value);
    };

    return (
        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ m: 0, minWidth: 120, color: 'var(--white)', background: '#9c27b0', borderRadius: '10px' }} size="small">
                    <InputLabel id="demo-simple-select-label">Coin</InputLabel>
                   
                </FormControl>
            </Box>
        </div>
    );
}

export default SelectCoin;


