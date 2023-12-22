import React, { useEffect, useState } from 'react';
import './style.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import LabTabs from '../../Componants/Dashboard/Tabs';
import PaginationComponant from '../../Componants/Dashboard/Pagination';
import GetToTopButton from '../../Componants/Compo/GetToTopButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashbord = () => {

    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const [pageInitioatedData, setPageInitioatedData] = useState([])
    const [page, setPage] = useState(1);


    const changePage = (e, value) => {
        setPage(value);
        let previousIndex = (value - 1) * 10;
        setPageInitioatedData(data.slice(previousIndex, previousIndex + 10))
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const notify = (noty) => toast(noty);

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
                setData(res.data);
                setPageInitioatedData(res.data.slice(0, 10))

            }
            catch (err) {
                notify(
                    "Too many requests. Try again later!😄")
            }
        }
        getData();
    }, [])

    const handelInput = (e) => {
        setInput(e.target.value);
    }


    let filterData = data.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))



    return (
        <div>
            <div className="input-container">
                <SearchIcon />
                <input type="text" placeholder='Search' value={input} onChange={handelInput} />
            </div>

            <div className='list-grid-btn'>
                {/* if i have search input send the filter data ,
                 and if i dont have search input sent the pageInitiontedData */}
                <LabTabs data={input ? filterData : pageInitioatedData} />
            </div>

            <div>
                {/* page Initioation componant... */}
                <PaginationComponant changePage={changePage} page={page} />
            </div>

            <GetToTopButton />
            <ToastContainer theme='dark' />
        </div>
    );
}

export default Dashbord;
