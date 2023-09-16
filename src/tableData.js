import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import WarningIcon from '@mui/icons-material/Warning';

const withTooltip = (Component, tooltipText, text) => (
    <div>{text}&nbsp;&nbsp;
    <Tooltip title={tooltipText} placement="right-end">
      <IconButton>
        <Badge badgeContent="1" color="error">
          {Component}
        </Badge>
      </IconButton>
    </Tooltip>
    </div>
  );
export const outerColumns = ["Markets", "Most Aged \n[Days in a stage]", "Expected Closing\n[Next 2 months]", "Most Value\n[Weighted Deal Value]", "Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5", "Loss"];
export const innerColumns = ["Opportunity", "Sector/Need", "Stage", "Days In Stage", "Expected Closing","Weighted D value", "FY23O", "FY23B", "WOL", "Onwer"];
export const data = [
  {
   outerData:[
    { value: "EMEA", color: "" },
    { value: "100\n[Stage 1]", color: "orange" },
    { value: "2\n[2150k]", color: "blue" },
    { value: "2000k\n[Stage 4]", color: "purple" },
    { value: "500k\n[Jan 24]", color: "" },
    { value: "250\n[Oct 23, Nov 23]", color: "" },
    { value: "2000k\n[Dec 23]", color: "" },
    { value: "0k\n[0]", color: "" },
    { value: "1000k\n[Jan 24]", color: "" },
    { value: "2000", color: "" },
  ],
    innerData: [[
        { value: "Client A", color: "", component: withTooltip(<MessageIcon color="info" />, '2 Opportunities [2500k] were lost with the client in the last quarter due to XYZ reasons. Contact Owner J for more information', "Client A") },
        { value: "Tech/New Content", color: "" },
        { value: "2", color: "" },
        { value: "3", color: "" },
        { value: "Oct23", color: "" },
        { value: "150k", color: "" },
        { value: "50k", color: "" },
        { value: "5k", color: "" },
        { value: "WOL", color: "" },
        { value: "X", color: "" },
    ],
      [
        { value: "Client B", component: withTooltip(<WarningIcon color="info" />, 'Category seems to show early signs of turmoil due to the revised policy issued by central government around taxation.', "Client A") },
        { value: "Tech/New Content", color: "" },
        { value: "2", color: "" },
        { value: "3", color: "" },
        { value: "Oct23", color: "" },
        { value: "150k", color: "" },
        { value: "50k", color: "" },
        { value: "5k", color: "" },
        { value: "WOL", color: "" },
        { value: "X", color: "" },
    ],
    [
      { value: "Client C", color: "" },
      { value: "Tech/New Content", color: "" },
      { value: "2", color: "" },
      { value: "3", color: "" },
      { value: "Oct23", color: "" },
      { value: "150k", color: "" },
      { value: "50k", color: "" },
      { value: "5k", color: "" },
      { value: "WOL", color: "" },
      { value: "X", color: "" },
  ]
]},
{
   outerData:[
    { value: "USA", color: "" },
    { value: "150\n[Stage 5]", color: "orange" },
    { value: "2\n[2150k]", color: "blue" },
    { value: "2000k\n[Stage 4]", color: "purple" },
    { value: "500k\n[Jan 24]", color: "" },
    { value: "250\n[Oct 23, Nov 23]", color: "" },
    { value: "2000k\n[Dec 23]", color: "" },
    { value: "0k\n[0]", color: "" },
    { value: "1000k\n[Jan 24]", color: "" },
    { value: "2000", color: "" },
  ],
    innerData: [[
        { value: "Client A", color: "", component: withTooltip(<MessageIcon color="info" />, '2 Opportunities [2500k] were lost with the client in the last quarter due to XYZ reasons. Contact Owner J for more information', "Client A") },
        { value: "Tech/New Content", color: "" },
        { value: "2", color: "" },
        { value: "3", color: "" },
        { value: "Oct23", color: "" },
        { value: "150k", color: "" },
        { value: "50k", color: "" },
        { value: "5k", color: "" },
        { value: "WOL", color: "" },
        { value: "X", color: "" },
    ],
      [
        { value: "Client B", color: "" },
        { value: "Tech/New Content", color: "" },
        { value: "2", color: "" },
        { value: "3", color: "" },
        { value: "Oct23", color: "" },
        { value: "150k", color: "" },
        { value: "50k", color: "" },
        { value: "5k", color: "" },
        { value: "WOL", color: "" },
        { value: "X", color: "" },
    ],
    [
      { value: "Client C", color: "" },
      { value: "Tech/New Content", color: "" },
      { value: "2", color: "" },
      { value: "3", color: "" },
      { value: "Oct23", color: "" },
      { value: "150k", color: "" },
      { value: "50k", color: "" },
      { value: "5k", color: "" },
      { value: "WOL", color: "" },
      { value: "X", color: "" },
  ]
]},
{
  outerData:[
   { value: "New Divisions", color: "" },
   { value: "100\n[Stage 1]", color: "" },
   { value: "2\n[Stage 2]", color: "blue" },
   { value: "2000k\n[Stage 4]", color: "purple" },
   { value: "500k\n[Jan 24]", color: "" },
   { value: "250\n[Oct 23, Nov 23]", color: "" },
   { value: "2000k\n[Dec 23]", color: "" },
   { value: "0k\n[0]", color: "" },
   { value: "1000k\n[Jan 24]", color: "" },
   { value: "2000", color: "" },
 ],
   innerData: [[
       { value: "Client A", color: "" },
       { value: "Tech/New Content", color: "" },
       { value: "2", color: "" },
       { value: "3", color: "" },
       { value: "Oct23", color: "" },
       { value: "150k", color: "" },
       { value: "50k", color: "" },
       { value: "5k", color: "" },
       { value: "WOL", color: "" },
       { value: "X", color: "" },
   ],
     [
       { value: "Client B", color: "" },
       { value: "Tech/New Content", color: "" },
       { value: "2", color: "" },
       { value: "3", color: "" },
       { value: "Oct23", color: "" },
       { value: "150k", color: "" },
       { value: "50k", color: "" },
       { value: "5k", color: "" },
       { value: "WOL", color: "" },
       { value: "X", color: "" },
   ],
   [
     { value: "Client C", color: "" },
     { value: "Tech/New Content", color: "" },
     { value: "2", color: "" },
     { value: "3", color: "" },
     { value: "Oct23", color: "" },
     { value: "150k", color: "" },
     { value: "50k", color: "" },
     { value: "5k", color: "" },
     { value: "WOL", color: "" },
     { value: "X", color: "" },
 ]
]},
];