
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import { Hero } from 'src/components/hero';
import { HomeBar } from 'src/components/app-bar';
import { NavTabs } from 'src/components/nav-tab';

// ----------------------------------------------------------------------

export default function HomeView() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <HomeBar />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Hero />
        <NavTabs />
        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <Card
            sx={{
              p: 5,
              width: 1,
              maxWidth: 420,
            }}
          >
            <Stack spacing={3}>
              <Typography variant="h4">THis Is Home Page</Typography>
            
            </Stack>
          </Card>
        </Stack>
      </Box>
      
    </Box>
  );
}
