// App.js
import React from "react";
import "./App.css";
import NestedTable from "./NestedTable";
import BasicTabs from "./Tabs";
import {data, outerColumns, innerColumns} from "./tableData";
import CustomerTable from "./Table";
import Charts from "./Charts";
import ChatWindow from "./ChatWindow";
import Grid from '@mui/material/Grid';

const App = () => {
  const tabs = [
    {
      label: 'All Opportunities ',
      content: <NestedTable data={data} outerColumns={outerColumns} innerColumns={innerColumns}/>,
    },
    {
      label: 'Customer',
      content: <CustomerTable/>,
    }
  ];
  

  return (
    <div className="App">
      <h1>Porfolio</h1>
    <div>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Charts/>
          <BasicTabs tabs={tabs} />
        </Grid>
        <Grid item xs={3} >
          <ChatWindow />
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default App;
