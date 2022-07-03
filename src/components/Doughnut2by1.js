import React, { useEffect, useRef } from 'react'
import './Doughnut2by1.css'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { IoIosArrowDown } from "react-icons/io";

ChartJS.register(ArcElement, Tooltip);

export const data1 = {
  labels: ['Inadequate', 'Perfect', 'Good'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 60, 30],
      backgroundColor: [
        '#DF6666',
        '#27C052',
        '#ABD84B'
      ],
      borderWidth: 0,
    },
  ],
};
export const data2 = {
  labels: ['Inadequate', 'Perfect', 'Good'],
  datasets: [
    {
      label: 'Dataset2',
      data: [12.5, 12.5, 75],
      backgroundColor: [
        '#DF6666',
        '#27C052',
        '#ABD84B'
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: false,
  cutout: '82%',
  radius: 60,
  plugins: {
    tooltip: {
      backgroundColor: '#000',
      displayColors: false,
      caretSize: 0,
      cornerRadius: {
        topLeft: 12,
        topRight: 12,
        bottomRight: 12,
        bottomLeft: 12,
      },
      padding: {
        x: 16,
        y: 8
      },
      position: 'nearest',
      body: 'body text'
    },
    title: {
      display: true,
      text: 'Custom Chart Title'
    },
  }
}

const Doughnut2by1 = () => {
  const doughnutRef1 = useRef(null);
  const doughnutRef2 = useRef(null);
  useEffect(() => {
    console.log(doughnutRef1.current);
  })

  return (
    <div className="contained">
      <div className="comp-body doughnut-block doughnut-block-narrow">
        <div className="doughnut-block-header">
          <div className="doughnut-block-header_title">Views</div>
          <div className="doughnut-block-header_filter">Select positioning issue <IoIosArrowDown /></div>
        </div>
        <div className="doughut-parent">
          <Doughnut data={data2} options={options} ref={doughnutRef2} />
          <Doughnut data={data1} options={options} ref={doughnutRef1} />
        </div>
        <div className="doughnut-block-bottom-link">View detailed breakdown</div>
      </div>
    </div>
  )
}

export default Doughnut2by1