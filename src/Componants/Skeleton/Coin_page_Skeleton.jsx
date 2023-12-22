import { Skeleton } from '@mui/material';
import React from 'react';

const CoinPageSkeleton = () => {
    return (
        <div className='coin-page'>
            <Skeleton
                sx={{ bgcolor: 'var(--skeleton-color)' }}
                variant="rounded"
                width={'90vw'}
                height={80}
            />

            <div>
                <Skeleton
                    sx={{ bgcolor: 'var(--skeleton-color)' }}
                    variant="rounded"
                    width={'120px'}
                    height={'50px'}
                />
                <Skeleton
                    sx={{ bgcolor: 'var(--skeleton-color)' }}
                    variant="rounded"
                    width={'300px'}
                    height={'50px'}
                />
            </div>

            <Skeleton
                sx={{ bgcolor: 'var(--skeleton-color)' }}
                variant="rounded"
                width={'90vw'}
                height={'500px'}
            />
            <p>
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '90vw', bgcolor: 'var(--skeleton-color)' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '90vw', bgcolor: 'var(--skeleton-color)' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '90vw', bgcolor: 'var(--skeleton-color)' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '90vw', bgcolor: 'var(--skeleton-color)' }} />
            </p>

        </div>
    );
}

export default CoinPageSkeleton;
