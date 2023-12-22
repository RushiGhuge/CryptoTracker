import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import removeDuplicatesFromCoins from '../../Functions/RemoveDuplicatesFromCompareSelects';
import axios from 'axios';

const style =
{
    color: 'white',
    borderRadius: '10px',
    "& .MuiInputBase-input": {
        borderColor: 'red',
        color: 'white',
        background: '#9c27b0',
        fontWeight: '600',
        minWidth: '120px'
    }

}

const CompareOptions = ({ coin_1, coin_2, setCoin_1, setCoin_2 }) => {

    const [coins, setCoins] = useState([]);



    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
                setCoins(res.data) // set the coins
            }
            catch (err) {
                alert(err.message);
            }
        }
        getData();
    }, [])

    const handleChange = (event) => {
        setCoin_1(event.target.value);
    };
    const handleChange2 = (event) => {
        setCoin_2(event.target.value);
    };


    return (
        <>
            {coins.length > 1 &&
                <div className='option-btns-container'>

                    <div>
                        Coin 1 :
                        <Select size='small'
                            sx={style}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={coin_1}
                            label="Coin 1 "
                            onChange={handleChange}

                        >
                            <MenuItem key={'1'} value={'f'}>f</MenuItem>
                            {coins.map((coin, id) => {
                                return (<MenuItem key={id} value={coin.id}>{coin.name}</MenuItem>)
                            })}
                        </Select>

                    </div>

                    <div>
                        Coin 2 :
                        <Select size='small'
                            sx={style}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={coin_2}
                            label="Coin 2 "
                            onChange={handleChange2}
                        >
                            {coins.map((coin, id) => {
                                return (<MenuItem key={id} value={coin.id}>{coin.name}</MenuItem>)
                            })}
                        </Select>
                    </div>

                </div>
            }
        </>

    );
}

export default CompareOptions;






// useEffect(() => {
//     let data = removeDuplicatesFromCoins(coin_1,coinsId)
//     console.log(data);
//     coinsId = data;
// }, [coin_1])

// useEffect(() => {
//     let data = removeDuplicatesFromCoins(coin_2,coinsId)
//     console.log(data);
//     coinsId = data
// }, [coin_2])