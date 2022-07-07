import React from "react";
import "./LineChart.css";

import { IoChevronDownOutline, IoCloseOutline } from "react-icons/io5";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Other practices',
      data: [40, 70, 65, 52, 58, 60],
      borderColor: '#A4A4A4',
    },
    {
      label: 'This practice',
      data: [50, 70, 55, 80, 72, 95],
      borderColor: '#5193F5',
    },
  ],
};

const LineChart = () => {
  return (
    <div
      className="comp-body flex-grow-1"
      style={{ padding: "24px 16px 40px" }}
    >
      <div className="line-chart-header d-flex">
        <div className="comp-header-title flex-1">Trending</div>
        <div className="comp-header-filter-group">
          <div className="comp-header-filter">
            Select positioning issue <IoChevronDownOutline className="font-black" />
          </div>
          <div className="comp-header-filter">
            Select View <IoChevronDownOutline className="font-black" />
          </div>
          <div className="comp-header-filter comp-header-filter-dark">
            Good + perfect <IoChevronDownOutline className="font-black" />
          </div>
        </div>
      </div>
      <div className="filter-below-header">
        <div className="selected-filter-pill">
          Good + Perfect quality <IoCloseOutline className="icon-lite" />
        </div>
        <div className="filter-pill-nogap-group">
          <div className="filter-pill-nogap-group-item">Year</div>
          <div className="filter-pill-nogap-group-item">Quarter</div>
          <div className="filter-pill-nogap-group-item selected">Month</div>
          <div className="filter-pill-nogap-group-item">Week</div>
        </div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
