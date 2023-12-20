// this is Home page...
import React from 'react';
import iPhone from '../../assets/iphone.080029ada53f0cd57453.png'
import bg from '../../assets/gradient.12a666ed10b3b442b534.png'
import './style.css'
import { motion } from 'framer-motion';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import whatsapp from '../../assets/5296520_bubble_chat_mobile_whatsapp_whatsapp logo_icon.svg'
import fecebook from '../../assets/5365678_fb_facebook_facebook logo_icon.svg'
import insta from '../../assets/5296765_camera_instagram_instagram logo_icon.svg'
import linkedin from '../../assets/5296501_linkedin_network_linkedin logo_icon.svg'
import pin from '../../assets/5296503_inspiration_pin_pinned_pinterest_social network_icon.svg'
import { NavLink } from 'react-router-dom';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'var(--darkgray)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

const Home = () => {


    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className='home'>
            <div className='home-container'>
                <div className='left-home'>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='heading1'>Track Crypto 🪙</motion.h1>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='heading2 text-color-gridient'> Real Time.</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>

                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className='btns'>
                        <NavLink to='/dashbord'>
                            <button className='dashbord-btn'>Dashboard</button>
                        </NavLink>
                        <button onClick={handleOpen} className='share-btn'>Share</button>
                    </motion.div>
                </div>

                <div className='iPhoneImg'>
                    <img className='bg' src={bg} alt="" />
                    <motion.img initial={{ y: -20 }}
                        animate={{ y: 10 }}
                        transition={{
                            type: "smooth",
                            repeatType: "mirror",
                            duration: 2,
                            repeat: Infinity
                        }} className='iphone' src={iPhone} alt="" />
                </div>
            </div>


            {/*this is model of share screen  */}

            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='share-container' sx={style}>
                        <img src={whatsapp} alt="" />
                        <img src={fecebook} alt="" />
                        <img src={insta} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={pin} alt="" />
                    </Box>
                </Modal>
            </div>

        </div>
    );
}

export default Home;
