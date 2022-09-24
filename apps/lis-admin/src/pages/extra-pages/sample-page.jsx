// material-ui
import { Grid } from '@mui/material';
import AnalyticsDataCard from 'components/cards/statistics/AnalyticsDataCard';

// project import
import UsersCardChart from 'sections/dashboard/analytics/UsersCardChart';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <Grid container rowSpacing={4.5} columnSpacing={3}>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <AnalyticsDataCard title="Total Users" count="78,250" percentage={70.5}>
        <UsersCardChart />
      </AnalyticsDataCard>
    </Grid>
  </Grid>
);

export default SamplePage;
