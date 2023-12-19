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

            {data.map((ele, idx) => {
                let color = 'green';
                delay += 0.1;
                if (ele.price_change_24h < 0) {
                    color = 'red'
                }

                return (
                    <ListBox
                        ele={ele} color={color} delay={delay}/>
                )
            })}
        </table>
    );
}

export default List;


