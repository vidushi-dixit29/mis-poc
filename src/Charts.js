import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { styled } from '@mui/material/styles';

const pieParams = { height: 200, width: 300 };
const oppPallate = ['#A8DF8E', '#ADD8E6', '#36454F'];
const sectorPallate = ['#ADD8E6', '#36454F'];
const chartSetting = {
  width: 300,
  height: 300
};
const dataset = [
  {
    value: 2100,
    lostValue: "Lost"
  },
  {
    value: 150,
    lostValue: "Withdrawn"
  },
  {
    value: 150,
    lostValue: "Aged"
  }
];
const StyledBarChart = styled(BarChart)`
  svg {
    viewBox: '0 100 200 300'
  }
`;

const valueFormatter = (value) => `$${value}`;

export default function Charts() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography style={{marginBottom: "60px"}}>Global View - Opportunity</Typography>
        <PieChart
          colors={oppPallate}
          series={[
            {
              data: [
                { id: 0, value: 27.7, label: 'New Division' },
                { id: 1, value: 30.4, label: 'US' },
                { id: 2, value: 41.9, label: 'EMEA' },
              ],
            },
          ]}
          {...pieParams}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography style={{marginBottom: "60px"}}>Sector View</Typography>
        <PieChart
          colors={sectorPallate}
          series={[
            {
              data: [
                { id: 0, value: 30, label: 'Tech' },
                { id: 1, value: 70, label: 'Consume' },
              ],
            },
          ]}
          {...pieParams}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography>Lost Opportunities</Typography>
        <BarChart
          dataset={dataset}
          xAxis={[{ scaleType: "band", dataKey: "lostValue" }]}
          series={[{ dataKey: "value", valueFormatter }]}
          {...chartSetting}
        />
      </Grid>
    </Grid>
  );
}
