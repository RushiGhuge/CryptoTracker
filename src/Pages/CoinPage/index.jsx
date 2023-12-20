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

const CoinPage = () => {

    // get the coin id from the URL
    // using the id we can get more info about the coin
    // as well we can access the chat using the id...

    let color = 'green';
    const { id } = useParams();
    const [chartData, setChartData] = useState(null);
    const [basicData, setBasicData] = useState(null);
    const [days, setDays] = useState(2);

    console.log(basicData);

    // this Function call the API and set the Coin Data...
    const getDataFromId = async () => {
        let res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        // setCoinData(res.data);
        coimobject(setBasicData, res.data)

        // if (basicData?.price_change_24h < 0) {
        //     color = 'red'
        // }
    }

    // this fucntion is get the chart details...
    const makeChart = async () => {
        const { prices } = await getChartData(id, days)

        if (prices.length > 2) {
            const chartData = {
                labels: prices.map(ele => new Date(ele[0]).getDate()),
                datasets: [
                    {
                        label: `${id}`,
                        data: prices.map(ele => ele[1]),
                        fill: true,
                        borderColor: 'white',
                        tension: 0.5
                    }
                ]
            };
            setChartData(chartData)
        }
    }

    useEffect(() => {
        makeChart()
    }, [days])

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
                        <div>
                            <SelectDays days={days} setDays={setDays} />
                            <CoinChart data={chartData} />
                        </div>
                    }

                    <CoinInfo heading={basicData.name} desc={basicData.desc} />
                </div>
            }

        </div>
    );
}

export default CoinPage;


