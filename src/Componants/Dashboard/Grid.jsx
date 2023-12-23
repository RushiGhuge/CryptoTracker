import React from 'react';
import Grid_Skeleton from '../Skeleton/Grid_Skeleton'
import GridBox from './Grid_Box';

const Grid = ({ data, setFavIds }) => {

    let delay = 0;
    // Skeleton...
    if (!data || data.length == 0) {
        return < Grid_Skeleton />
    }


    return (
        <div className='grid-container'>

            {data.map((ele) => {
                delay += 0.03;

                return <GridBox key={ele.id} ele={ele} delay={delay} setFavIds={setFavIds} />
            })}
        </div>
    );
}

export default Grid;
