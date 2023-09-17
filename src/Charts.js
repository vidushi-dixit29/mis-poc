import React from 'react';
import { Grid } from '@mui/material';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
} from 'recharts';

const lossData = [
  { name: 'Lost', value: 2100 },
  { name: 'Aged', value: 150 },
  { name: 'Withdrawn', value: 150 },
];

const sectorData = [
  { name: 'Tech', value: 31 },
  { name: 'Cosumer', value: 69 },
];

const grossOpportunity = [
  { name: 'US', value: 30.4 },
  { name: 'EMEA', value: 41.9 },
  { name: 'New Division', value: 27.7 },
  
];
const grossOpportunityPallate = ['#A8DF8E', '#ADD8E6', '#36454F'];

const colors = ['#0088FE', '#00C49F', '#FFBB28'];

const Charts = () => {
  return (
    <Grid container spacing={3} style={{paddingBottom:30}}>
      <Grid item xs={12} md={4}>
        <h4>Global View - Opportunity</h4>
          <PieChart width={310} height={230}>
            <Pie
              data={grossOpportunity}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              fill="#8884d8"
              label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {grossOpportunity.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={grossOpportunityPallate[index % grossOpportunityPallate.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className="chart">
        <h4>Sector View</h4>
          <PieChart width={310} height={230}>
            <Pie
              data={sectorData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              fill="#8884d8"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {sectorData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div className="chart">
          <h4>Lost Opportunities</h4>
          <BarChart width={300} height={230} data={lossData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="chart">
        </div>
      </Grid>
    </Grid>
  );
};

export default Charts;
