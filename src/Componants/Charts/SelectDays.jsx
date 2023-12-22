import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SelectDays({ days, setDays }) {


    const handleChange = (event) => {
        setDays(event.target.value);
    };

    return (
        <Box sx={{ m: 1, minWidth: 120, }} >
            <FormControl sx={{ m: 0, minWidth: 120, outline: 'none', color: 'var(--white)', background: '#9c27b0', borderRadius: '5px' }} size="small" >

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={days}
                    label="Days"
                    sx={{
                        color: 'white',
                        borderRadius: '10px',
                        outline: 'none',
                        fontWeight:'600',
                        height:'37px'
                    }}

                    onChange={handleChange}
                >
                    <MenuItem value={1}>1 Days</MenuItem>
                    <MenuItem value={2}>2 Days</MenuItem>
                    <MenuItem value={7}>7 Days</MenuItem>
                    <MenuItem value={15}>15 Days</MenuItem>
                    <MenuItem value={30}>30 Days</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}