import { Box, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <Typography variant="h6">Weight & BMI</Typography>
            {/* Weight widget content will go here */}
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <Typography variant="h6">Income & Expenses</Typography>
            {/* Financial widget content will go here */}
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <Typography variant="h6">Calories Today</Typography>
            {/* Calories widget content will go here */}
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <Typography variant="h6">Gym Schedule</Typography>
            {/* Gym widget content will go here */}
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <Typography variant="h6">Upcoming Events</Typography>
            {/* Calendar widget content will go here */}
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <Typography variant="h6">Tasks</Typography>
            {/* Tasks widget content will go here */}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}