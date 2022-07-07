import React, { useEffect, useRef } from 'react'
import './Doughnut2by1.css'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { IoChevronDownOutline } from "react-icons/io5";

ChartJS.register(ArcElement, Tooltip);

export const data1 = {
  labels: ['Inadequate', 'Perfect', 'Good'],
  datasets: [
    {
      label: 'MLO',
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
      label: 'CC',
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

const opt = {
  responsive: false,
  cutout: '82%',
  radius: 60,
  plugins: {
    legend: false,
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
    <div className="comp-body doughnut-block doughnut-block-narrow">
      <div className="doughnut-block-header">
        <div className="comp-header-title">Views</div>
        <div className="comp-header-filter">Select positioning issue <IoChevronDownOutline className='font-black' /></div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="doughnut-item">
          <div className="doughnut-center-label">MLO</div>
          <Doughnut data={data1} options={opt} ref={doughnutRef2} />
        </div>
        <div className="doughnut-item">
          <div className="doughnut-center-label">CC</div>
          <Doughnut data={data2} options={opt} ref={doughnutRef1} />
        </div>
      </div>
      <div className="doughnut-block-bottom-link">View detailed breakdown</div>
    </div>
  )
}

export default Doughnut2by1