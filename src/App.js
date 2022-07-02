import React from 'react'
import './App.css';
import Breadcrumb from './components/Breadcrumb';
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

    </>

  );
}

export default App;
