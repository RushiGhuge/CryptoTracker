import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import coimobject from '../../Functions/MakeBasicObj'; // function that make basic obj
import ListBox from '../../Componants/Dashboard/List_box';
import CoinInfo from '../../Componants/Coin/CoinInfo';
import './style.css'
import CoinChart from '../../Componants/Charts/Chart';
import getChartData from '../../Functions/getChartData';

const CoinPage = () => {

    // get the coin id from the URL
    // using the id we can get more info about the coin
    // as well we can access the chat using the id...

    let color = 'green';
    const { id } = useParams();
    const [coinData, setCoinData] = useState({});
    const [chartData, setChartData] = useState(null);
    const [basicData, setBasicData] = useState(null);

    console.log(basicData);

    // this Function call the API and set the Coin Data...
    const getDataFromId = async () => {
        let res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        // setCoinData(res.data);
        coimobject(setBasicData, res.data)

        const { prices } = await getChartData()
        console.log(prices);

        if (prices.length > 2) {
            const chartData = {
                labels: prices.map(ele => new Date(ele[0]).getDate()),
                datasets: [
                    {
                        label: 'My First dataset',
                        data: prices.map(ele => ele[1]),
                        fill: true,
                        borderColor: 'white',
                        tension: 0.5
                    }
                ]
            };
            setChartData(chartData)
        }



        // if (basicData?.price_change_24h < 0) {
        //     color = 'red'
        // }
    }



    // Call the api when the page is load ...
    // This Function will call only once when page is load....
    useEffect(() => {
        getDataFromId()
        // console.log(basicData); // we get the only basic need of data to add a List of box...
    }, [])




    return (
        <div className='coin-page-container'>
            {basicData
                &&
                <div>
                    <ListBox ele={basicData} color={'green'} delay={0} />

                    {   
                    chartData &&
                        <CoinChart data={chartData} />
                    }

                    <CoinInfo heading={basicData.name} desc={basicData.desc} />
                </div>
            }

        </div>
    );
}

export default CoinPage;


