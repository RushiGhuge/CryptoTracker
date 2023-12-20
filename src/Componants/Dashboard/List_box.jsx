import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Tooltip from '@mui/material/Tooltip';
import ConvertNumber from '../../Functions/convertNumber';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const ListBox = ({ ele, color, delay }) => {


    return (
        <Link to={`/coin/${ele.id}`}>
            <motion.tr
                initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0, delay: delay }}
                className={`list-box`}>
                <Tooltip title="Coin" arrow>
                    <td className="col">
                        <div className='logo'>
                            <img src={ele.image} alt="logo" />
                        </div>
                        <div>
                            <h3>{ele.name}</h3>
                            <span style={{ color: 'var(--gray)' }}>{ele.id}</span>
                        </div>
                    </td>
                </Tooltip>

                <td className="col">
                    <Tooltip title="Day Changes" arrow>
                        <button className={`price ${color}`}>
                            {ele.price_change_percentage_24h}
                        </button>
                    </Tooltip>

                    <Tooltip title="Current Status" arrow>
                        <button className={`price ${color} circle`}>
                            {color == 'green' ? <TrendingUpIcon /> : <TrendingDownIcon />}
                        </button>
                    </Tooltip>
                </td>

                <td className="col">

                    <Tooltip title="Current Price" arrow>
                        <h2 className='price-cur' style={{ color: `var(--${color}` }}>${ele.current_price}
                        </h2>
                    </Tooltip>
                </td>

                <td className='last-col' style={{ color: 'var(--white)' }}>
                    <div className='total-val'>
                        <Tooltip title="Total Valume" arrow>
                            <p>${ele.total_volume}</p>
                        </Tooltip>
                    </div>

                    <div className='desktop-tmc'>
                        <Tooltip title="Total Market Cap" arrow>
                            <p>${ele.market_cap}</p>
                        </Tooltip>
                    </div>

                    <div className='mobile-tmc'>
                        <Tooltip title="Total Market Cap" arrow>
                            <p>${ConvertNumber(ele.market_cap)}</p>
                        </Tooltip>s
                    </div>
                </td>
            </motion.tr>
        </Link>
    )
}

export default ListBox;
