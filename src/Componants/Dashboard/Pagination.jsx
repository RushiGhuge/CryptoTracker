import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginationComponant = ({changePage, page}) => {
    return (
        <div className='pagination-container'>
            <Pagination count={10} page={page} variant="outlined" color="primary"
                   onChange={(e, value)=>{
                    changePage(e,value)
                   }}
            />
        </div>
    );
}

export default PaginationComponant;

