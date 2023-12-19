import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import './skeleton.css'


const DashbordSkeleton = () => {

    let numberOfItems = 10;

    return (
        <ul className='gird-skeleton'>
            {(() => {
                const items = [];
                for (let i = 1; i <= numberOfItems; i++) {
                    items.push(<li key={i}>
                        <Skeleton
                            animation="wave"
                            sx={{
                                bgcolor: 'var(--skeleton-color)'
                            }}
                            variant="rounded"
                            width={300}
                            height={300}
                        />

                    </li>);
                }
                return items;
            })()}
        </ul>

    );
}

export default DashbordSkeleton;


