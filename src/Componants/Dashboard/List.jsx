import React from 'react';
import { motion } from 'framer-motion';
import ListSkeleton from '../Skeleton/List_Skeleton';
import ListBox from './List_box';


const List = ({ data }) => {
    let delay = 0;  // delay of animation 
    // Skeleton... add that when data is not present... ???
    if (!data || data.length == 0) {
        return < ListSkeleton />
    }

    return (
        <table className='list-container'>
            <tbody>

                {data.map((ele, idx) => {
                    delay += 0.1;

                    return (
                        <ListBox
                            ele={ele} delay={delay} />
                    )
                })}
            </tbody>
        </table>
    );
}

export default List;


