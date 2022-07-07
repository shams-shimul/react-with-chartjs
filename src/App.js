import React from 'react'
import './App.css';

import { Chart } from 'chart.js';

import Breadcrumb from './components/Breadcrumb';
import Donut2by1 from './components/Doughnut2by1';
import Head from './components/Head';
import LineChart from './components/LineChart';
import PageHeader from './components/PageHeader';
import SummaryStat from './components/SummaryStat';

function App() {
  Chart.defaults.font.family = "'Poppins', sans-serif";
  return (
    <>
      <Head />
      <Breadcrumb />
      <PageHeader />
      <SummaryStat />
      <div className="contained d-flex col-gap-16">
        <Donut2by1 />
        <LineChart />
      </div>
    </>

  );
}

export default App;
