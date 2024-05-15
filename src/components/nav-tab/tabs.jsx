import * as React from 'react';
import { XEmbed,FacebookEmbed,InstagramEmbed } from 'react-social-media-embed';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TabPanel from '@mui/lab/TabPanel';
import XIcon from '@mui/icons-material/X';
import TabContext from '@mui/lab/TabContext';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const postURL = 'https://www.instagram.com/reel/C60XCofNP-b/?igsh=MTFhbTEyYTgzOTRsaQ==';

  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
      <Box id="sosmed" container alignItems="center" justifyContent="center" sx={{ py: 4, borderBottom: 1, borderColor: 'divider'}}>
        <TabContext justifyContent="center" value={value}>
          <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon={<InstagramIcon />} label="Instagram" value="1" />
            <Tab icon={<FacebookIcon />} label="Facebook" value="2" />
            <Tab icon={<XIcon />} label="Twitter" value="3" />
          </Tabs>
          
          <TabPanel value="1">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} key="1" sx={{ display: 'flex' }}>
                <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} key="2" sx={{ display: 'flex' }}>
                <InstagramEmbed url={postURL} width={328} />
              </Grid> 
            </Grid> 
          </TabPanel>
          <TabPanel value="2">
            <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" width={328} />
          </TabPanel>
          <TabPanel value="3">
            <XEmbed url="https://twitter.com/PixelAndBracket/status/1356633038717923333" width={325} />
          </TabPanel>
        </TabContext>
      </Box>
    </Stack>
  );
}
