import { BarChart } from './BarChart';
import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { Data } from './utils/Data';
import "chart.js/auto";
import  Sidebar  from '../common/side-navbar/SideNavbar';
//import Sidebar from './sidebar';
import LineChart from './LineChart'
import PieChart from './PieChart'
function Success() {   
    let location=useLocation(); 
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });

  return (
    <div>
<Sidebar />
        <h1>Success Login</h1>
        <BarChart chartData={chartData} />
        <br/>
        <br />
        <br />
        <LineChart />
        <br/>
        <br />
        <br />
        <PieChart />
        
        <br/>
        <br />
        <br />
        <Link to="/">Back to Login</Link>
    </div>
  )
}

export default Success