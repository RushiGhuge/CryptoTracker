import React, { useEffect, useState } from 'react';
import './style.css'
import CompareOptions from '../../Componants/Compare-componants/CompareOptions';
import SelectDays from '../../Componants/Charts/SelectDays';
import ListBox from '../../Componants/Dashboard/List_box';
import getDataFromId from '../../Functions/getDataFromId';
import coimobject from '../../Functions/MakeBasicObj';
import CoinInfo from '../../Componants/Coin/CoinInfo';
import CoinChart from '../../Componants/Charts/Chart';
import getChartData from '../../Functions/getChartData';
import setChartDataFunction from '../../Functions/dataShowToChart';
import CoinPageSkeleton from '../../Componants/Skeleton/Coin_page_Skeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChartBtnsGroup from '../../Componants/Charts/ChartButtonsChangeData';
import GetToTopButton from '../../Componants/Compo/GetToTopButton';


const Compare = () => {

    const [coin_1, setCoin_1] = useState('bitcoin');
    const [coin_2, setCoin_2] = useState('binancecoin');
    const [days, setDays] = useState(15);
    const [coin_1_data, setCoin_1_data] = useState(null)
    const [coin_2_data, setCoin_2_data] = useState(null)
    const [chartData, setChartData] = useState(null);
    const [allChartData, setAllChartData] = useState(null);
    const [chartShow, setChartShow] = useState('prices');
    const [isLoading, setIsLoading] = useState(true);

    const notify = (noti) => toast(noti);

    async function getDataToShowList(coin, setCoin) {
        try {
            let data = await getDataFromId(coin)
            coimobject(setCoin, data)
            setIsLoading(false);
        }
        catch (e) {
            notify(e.message)
        }
    }

    useEffect(() => {
        getDataToShowList(coin_1, setCoin_1_data)
    }, [coin_1])


    useEffect(() => {
        getDataToShowList(coin_2, setCoin_2_data)
    }, [coin_2])

    // chrt section..
    const makeChart = async (coin1, coin2) => {
        try {
            const chartData1 = await getChartData(coin1, days)
            const chartData2 = await getChartData(coin2, days)
            setChartDataFunction(chartData1.prices, setChartData, [coin_1, coin_2], chartData2.prices)
            setAllChartData([chartData1, chartData2])  // seted all the chart data of chart 1 and chart 2
        } catch (e) {
            notify(e.message)
        }
        // setAllChartData(chartData)
    }

    // call a make chart when dependency are chage
    useEffect(() => {
        makeChart(coin_1, coin_2)
    }, [coin_1, coin_2, days])



    // this useEffect run when the chart showing data is change without any api call...
    useEffect(() => {
        if (allChartData) {
            console.log('done');
            if (chartShow == 'prices') {
                setChartDataFunction(allChartData[0].prices, setChartData, [coin_1, coin_2], allChartData[1].prices)
            }
            else if (chartShow == 'market_caps') {
                setChartDataFunction(allChartData[0].market_caps, setChartData, [coin_1, coin_2], allChartData[1].market_caps)
            }
            else {
                setChartDataFunction(allChartData[0].total_volumes, setChartData, [coin_1, coin_2], allChartData[1].total_volumes)
            }
        }
    }, [chartShow])

    if (isLoading) {
        return (<>
            <CoinPageSkeleton />
            <ToastContainer theme="dark" type='error' />
        </>
        )
    }

    return (
        <div className='compare-container'>
            <h2>Compare Crypto Currency 🪙</h2>

            <div className='container-compare-op'>
                <CompareOptions coin_1={coin_1} coin_2={coin_2} setCoin_1={setCoin_1} setCoin_2={setCoin_2} />
                <SelectDays days={days} setDays={setDays} />
            </div>

            {/* show the list */}

            {coin_1_data && coin_2_data &&
                <div className='container-compare-notMain'>
                    <div className='list-compare-container'>
                        <ListBox ele={coin_1_data} />
                        <ListBox ele={coin_2_data} />
                    </div>


                    {/*  show the charts */}

                    {chartData &&
                        <div >
                            <ChartBtnsGroup setChartShow={setChartShow} />
                            <CoinChart data={chartData} multiAxis={true} />
                        </div>
                    }

                    {/* show the info of coins */}
                    <div>
                        <CoinInfo heading={coin_1_data.name} desc={coin_1_data.desc} />
                        <CoinInfo heading={coin_2_data.name} desc={coin_2_data.desc} />
                    </div>
                </div>
            }


            <GetToTopButton />
            <ToastContainer theme="dark" type='error' />
        </div>
    );
}

export default Compare;
