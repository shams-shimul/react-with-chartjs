import React from 'react'
import './App.css';
import Breadcrumb from './components/Breadcrumb';
import Donut2by1 from './components/Doughnut2by1';
import Head from './components/Head';
import PageHeader from './components/PageHeader';
import SummaryStat from './components/SummaryStat';

function App() {
  return (
    <>
      <Head />
      <Breadcrumb />
      <PageHeader />
      <SummaryStat />
      <Donut2by1 />
    </>

  );
}

export default App;
