import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import coimobject from '../../Functions/MakeBasicObj'; // function that make basic obj
import ListBox from '../../Componants/Dashboard/List_box';
import CoinInfo from '../../Componants/Coin/CoinInfo';
import './style.css'
import CoinChart from '../../Componants/Charts/Chart';
import getChartData from '../../Functions/getChartData';
import SelectDays from '../../Componants/Charts/SelectDays';
import ChartBtnsGroup from '../../Componants/Charts/ChartButtonsChangeData';
import setChartDataFunction from '../../Functions/dataShowToChart';
import CoinPageSkeleton from '../../Componants/Skeleton/Coin_page_Skeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetToTopButton from '../../Componants/Compo/GetToTopButton';
const CoinPage = () => {

    // get the coin id from the URL
    // using the id we can get more info about the coin
    // as well we can access the chat using the id...

    console.log('rendering the chart');

    const { id } = useParams();
    const [chartData, setChartData] = useState(null);
    const [basicData, setBasicData] = useState(null);
    const [days, setDays] = useState(2);
    const [chartShow, setChartShow] = useState('prices');
    const [allChartData, setAllChartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const notify = (noty) => toast(noty);

    // this Function call the API and set the Coin Data...
    const getDataFromId = async () => {
        try {
            let res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            // setCoinData(res.data);
            setIsLoading(false)
            coimobject(setBasicData, res.data)
        }
        catch (e) {
            setIsLoading(true);
            notify(e.message + " Too many requests.")
        }
    }

    // const setChartDataFunction = (dataShowToChart) => {
    //     if (dataShowToChart.length > 2) {
    //         const chartData = {
    //             labels: dataShowToChart.map(ele => formatDate(new Date(ele[0]))),
    //             datasets: [
    //                 {
    //                     label: `${id}`,
    //                     data: dataShowToChart.map(ele => ele[1]),
    //                     fill: true,
    //                     borderColor: 'white',
    //                     tension: 0.5
    //                 }
    //             ]
    //         };
    //         setChartData(chartData)
    //     }
    // }

    // this fucntion is get the chart details...
    const makeChart = async () => {
        const chartData = await getChartData(id, days)
        setChartDataFunction(chartData.prices, setChartData, [id])
        setAllChartData(chartData)
    }


    // this useEffect run when the chart showing data is change without any api call...
    useEffect(() => {
        if (allChartData) {
            console.log('done');
            if (chartShow == 'prices') {
                setChartDataFunction(allChartData.prices, setChartData, [id])
            }
            else if (chartShow == 'market_caps') {
                setChartDataFunction(allChartData.market_caps, setChartData, [id])
            }
            else {
                setChartDataFunction(allChartData.total_volumes, setChartData, [id])
            }
        }
    }, [chartShow])


    // this useEffect run when the days are change with api call...
    useEffect(() => {
        makeChart()
    }, [days])


    // this useEffect run only for first time to get the data from id and render it...
    useEffect(() => {
        getDataFromId()
    }, [])


    if (isLoading) {
        return <> <CoinPageSkeleton /> <ToastContainer /></>
    }


    return (
        <div className='coin-page-container'>
            {basicData
                &&
                <div>
                    <ListBox ele={basicData} color={'green'} delay={0} />

                    {
                        chartData &&
                        <div>
                            <div className='btns-container-coin-page'>
                                <SelectDays days={days} setDays={setDays} />
                                <ChartBtnsGroup setChartShow={setChartShow} />
                            </div>
                            <div>
                                <CoinChart data={chartData} />
                            </div>
                        </div>
                    }

                    <CoinInfo heading={basicData.name} desc={basicData.desc} />
                </div>
            }
            <GetToTopButton />
            <ToastContainer theme='dark' />
        </div>
    );
}

export default CoinPage;


