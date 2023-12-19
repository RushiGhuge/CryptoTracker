import * as React from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { NavLink } from 'react-router-dom';


export default function SwipeableTemporaryDrawer() {

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button  onClick={() => setOpen(true)}><MenuIcon /></Button>
      <Drawer
        anchor={'right'}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className='side-nav'>  
          <NavLink  to="/">Home</NavLink>
          <NavLink to="/compare">Compare</NavLink>
          <NavLink to="/dashbord">
            <button className="dashbord-btn">Dashboard</button>
          </NavLink>
        </div>
      </Drawer>
    </div>
  );
}