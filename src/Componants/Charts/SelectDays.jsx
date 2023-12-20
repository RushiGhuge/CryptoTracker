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
        <Box sx={{m:1, minWidth: 120 }} >
            <FormControl sx={{ m: 1, minWidth: 120 , color:'var(--white)', background:'var(--darkgray)'}} size="small" >
                <InputLabel id="demo-simple-select-label">Days</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={days}
                    label="Days"
                    InputProps={{
                        style: {
                          borderColor: '',
                        },
                      }}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>1 Days</MenuItem>
                    <MenuItem value={7}>7 Days</MenuItem>
                    <MenuItem value={15}>15 Days</MenuItem>
                    <MenuItem value={30}>30 Days</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}