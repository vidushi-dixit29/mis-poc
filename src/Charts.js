import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

const pieParams = { height: 200, width: 300 };
const oppPallate = ['#A8DF8E', '#ADD8E6', '#36454F'];
const sectorPallate = ['#ADD8E6', '#36454F'];
const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)"
    }
  ],
  width: 400,
  height: 300
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: "Jan"
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: "Fev"
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: "Mar"
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: "Apr"
  }
];

const valueFormatter = (value) => `${value}mm`;

export default function Charts() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography>Global View - Opportunity</Typography>
        <PieChart
          colors={oppPallate}
          series={[
            {
              data: [
                { id: 0, value: 27.7, label: 'Division' },
                { id: 1, value: 30.4, label: 'US' },
                { id: 2, value: 41.9, label: 'EMEA' },
              ],
            },
          ]}
          {...pieParams}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography>Sector View</Typography>
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
      <Grid item xs={4}>
        <Typography>Lost Opportunities</Typography>
        <BarChart
          dataset={dataset}
          xAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[{ dataKey: "seoul", valueFormatter }]}
          {...chartSetting}
        />
      </Grid>
    </Grid>
  );
}
