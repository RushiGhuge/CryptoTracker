import React, { useContext, useEffect, useMemo, useState } from 'react';
import './style.modul.css'
import Loder from '../../Componants/Loder/Loder';
import LabTabs from '../../Componants/Dashboard/Tabs';
import '../../Pages/Dashboard/style.css'
import { AllCoinsContext } from '../../Context/AllCoinsContext';
import { NavLink } from 'react-router-dom';

const WatchList = () => {

    const [fevIds, setFavIds] = useState([]);             // ✅       // ✅
    const [fevShowData, setFavShowData] = useState([]);
    const [coins, setCoins] = useState([])
    const { allCoins } = useContext(AllCoinsContext)


    useEffect(() => {
        window.addEventListener('storage', () => { console.log('update') });
    }, [])


    useEffect(() => {
        allCoins.then((p) => setCoins(p));
    }, [allCoins])

    const getWatchListFromLocal = () => {
        let val = localStorage.getItem('watchList');
        if (val != '') {
            setFavIds(JSON.parse(val));
        }
    }


    const filterDataByIds = () => {
        if (fevIds && coins) {
            const filterData = coins.filter((coin) => fevIds.includes(coin.id))
            setFavShowData(filterData)
        }
    }


    useEffect(() => {
        if (fevIds) {
            filterDataByIds()
        }
    }, [fevIds])


    useEffect(() => {
        getWatchListFromLocal()
    }, [])



    return (
        <div>
            <h2>Watch List 🔔</h2>
            {/* <Loder /> */}
            {fevShowData.length > 0 ?
                <LabTabs data={fevShowData} setFavIds={setFavIds} />
                : <div className='empty-watchList'>
                    <h2>Watch Your Fevorite Coins 🪙</h2>

                    <NavLink to="/dashbord">
                        <button className="dashbord-btn">Dashboard</button>
                    </NavLink>

                </div>
            }

        </div>
    );
}

export default WatchList;
