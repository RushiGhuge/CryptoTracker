import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from './Grid';
import List from './List';

export default function LabTabs({ data }) {
  const [value, setValue] = React.useState('gird');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth">
            <Tab label="Grid" value="gird" sx={{ color: "var(--white)", fontSize: '0.9rem', fontWeight: '600' }} />
            <Tab label="List" value="list" sx={{ color: "var(--white)", fontSize: '0.9rem', fontWeight: '600' }} />
          </TabList>
        </Box>

        <TabPanel value="gird">
          {/* grids */}
          <Grid data={data} />
        </TabPanel>

        <TabPanel value="list">
          {/* lists */}
          <List data={data} />
        </TabPanel>

      </TabContext>
    </Box>
  );
}
