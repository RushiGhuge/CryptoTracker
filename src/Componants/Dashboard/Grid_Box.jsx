import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import AddFavLocalStorage from '../../Functions/addFavLocalStorage';
import RemoveFavLocalStorage from '../../Functions/removeFavLocalStorage';


const GridBox = ({ ele, delay, setFavIds }) => {

    const fArray = getStoredId()

    // get the stored ids


    const navigate = useNavigate();
    const [isFav, setIsFav] = useState(fArray.includes(ele.id));  // set true and false depends on the condition
    let color = 'green';


    if (ele.price_change_24h < 0) {
        color = 'red'
    }

    function getStoredId() {
        let items;
        try {
            const storedValue = localStorage.getItem("watchList");
            items = storedValue ? JSON.parse(storedValue) : [];
            if (!Array.isArray(items)) {
                items = []; // Handle cases where the stored value is not a valid array
            }
        } catch (error) {
            console.error("Error parsing localStorage:", error);
            items = []; // Handle parsing errors
        }
        return items;
    }

    // open the coin details page... ✅
    const openCoin = (id) => {
        console.log(id);
        navigate(`/coin/${id}`)
    }

    function toggleFav(e, id) {
        e.stopPropagation()
        setIsFav(!isFav);
        if (!isFav) {
            AddFavLocalStorage(id)
        }
        else {
            RemoveFavLocalStorage(id, setFavIds)
        }
    }



    return (
        <motion.div
            onClick={(e) => openCoin(ele.id)}
            key={ele.id}
            initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0, delay: delay }}
            className={`grid-box ${color == 'red' ? 'red-border' : 'green-border'}`}>
            <div className="row">
                <div className='first-row'>
                    <div className='logo'>
                        <img src={ele.image} alt="logo" />
                    </div>
                    <div>
                        <h2>{ele.name}</h2>
                        <span style={{ color: 'var(--gray)' }}>{ele.id}</span>
                    </div>
                </div>

                <div onClick={(e) => { toggleFav(e, ele.id) }} className='favorite'>
                    <IconButton sx={{ color: '#ee6c6c' }}>
                        {!isFav ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                    </IconButton>
                </div>
            </div>

            <div className="row">
                <button className={`price ${color}`}>
                    {ele.price_change_percentage_24h}
                </button>
                <button className={`price ${color} circle`}>
                    {color == 'green' ? <TrendingUpIcon /> : <TrendingDownIcon />}
                </button>
            </div>

            <div className="row">
                <h2 className='price-cur' style={{ color: `var(--${color}` }}>${ele.current_price}
                </h2>
            </div>

            <div className='last-row' style={{ color: 'var(--gray)' }}>
                <div>
                    <h4>Total Valume : </h4>
                    <p>{ele.total_volume}</p>

                </div>

                <div>
                    <h4>Market Cap : </h4>
                    <p>{ele.market_cap}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default GridBox;
