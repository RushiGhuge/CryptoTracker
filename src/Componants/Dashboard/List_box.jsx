import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Tooltip from '@mui/material/Tooltip';
import ConvertNumber from '../../Functions/convertNumber';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './List_box.css'
import '../../Pages/Dashboard/style.css'

s
const ListBox = ({ ele, delay=0 }) => {

    let color = 'green';
    if (ele.price_change_24h < 0) {
        color = 'red'
    }

    return (
        
        <Link to={`/coin/${ele.id}`} style={{width:'100%'}}>
            <motion.tr
                initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0, delay: delay }}
                className='list-box b'>
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
                        <button className={`price ${color} circle circle-list`}>
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
