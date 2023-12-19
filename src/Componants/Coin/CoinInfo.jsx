import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Coin.css'

const CoinInfo = ({ heading, desc }) => {

    const [readMore, setReadMore] = useState(false);

    const shortDesc = desc.slice(0, 500) + ` <span style='color:var(--blue);  cursor: pointer;' >Read More</span> `
    const longDesc = desc + ` <span style='color:var(--blue);  cursor: pointer' >Read Less</span> `;
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            className='gray-wrapper'>
            <h1>{heading} 🪙</h1>
            <p onClick={() => setReadMore(!readMore)} dangerouslySetInnerHTML={{ __html: readMore ? longDesc : shortDesc }} />
        </motion.div>
    );
}

export default CoinInfo;
