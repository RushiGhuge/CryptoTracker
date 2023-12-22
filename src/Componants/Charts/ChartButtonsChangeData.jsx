import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ChartBtnsGroup = ({ setChartShow }) => {

    return (
        <ButtonGroup sx={{ m: 1, }}
            variant="contained" color="secondary" aria-label="outlined primary button group">
            <Button sx={{ fontWeight: '600' }} onClick={() => setChartShow('prices')} >Prices</Button>
            <Button sx={{ fontWeight: '600' }} onClick={() => setChartShow('market_caps')} >Market Cap</Button>
            <Button sx={{ fontWeight: '600' }} onClick={() => setChartShow('total_volumes')} >Valume</Button>
        </ButtonGroup>
    );
}

export default ChartBtnsGroup