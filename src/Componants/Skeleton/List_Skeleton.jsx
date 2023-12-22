import { Skeleton } from '@mui/material';
import React from 'react';

const ListSkeleton = () => {

    let numberOfItems = 10;

    return (
        <ul className='gird-skeleton'>
            {(() => {
                const items = [];
                for (let i = 1; i <= numberOfItems; i++) {
                    items.push(<li key={i}>
                        <Skeleton
                            sx={{ bgcolor: 'var(--skeleton-color)' }}
                            variant="rounded"
                            width={'90vw'}
                            height={80}
                        />
                    </li>);
                }
                return items;
            })()}
        </ul>
    );
}

export default ListSkeleton;
