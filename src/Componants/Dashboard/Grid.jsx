import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Grid_Skeleton from '../Skeleton/Grid_Skeleton'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Grid = ({ data }) => {

    const navigate = useNavigate();
    let delay = 0;
    // Skeleton...
    if (!data || data.length == 0) {
        return < Grid_Skeleton />
    }

    // open the coin details page... ✅
    const openCoin = (id) => {
        console.log(id);
        navigate(`/coin/${id}`)
    }

    return (
        <div className='grid-container'>

            {data.map((ele) => {
                let color = 'green';
                delay += 0.03;
                if (ele.price_change_24h < 0) {
                    color = 'red'
                }

                return (
                    <motion.div
                        onClick={() => openCoin(ele.id)}
                        key={ele.id}
                        initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0, delay: delay }}
                        className={`grid-box ${color == 'red' ? 'red-border' : 'green-border'}`}>
                        <div className="row">
                            <div className='logo'>
                                <img src={ele.image} alt="logo" />
                            </div>
                            <div>
                                <h2>{ele.name}</h2>
                                <span style={{ color: 'var(--gray)' }}>{ele.id}</span>
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
                )
            })}
        </div>
    );
}

export default Grid;
