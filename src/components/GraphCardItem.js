import React from 'react'
import './GraphCardItem.css'

const GraphCardItem = ({ metric, perfect, good, inadequate }) => {
  return (
    <>
      <div className="graph-card-metric">{metric}</div>
      <div className="graph-card-metric-bar">
        <div className="graph-card-metric-bar-perfect" style={{ width: `${perfect}%` }}></div>
        <div className="graph-card-metric-bar-good" style={{ width: `${perfect + good}%` }}></div>
        <div className="graph-card-metric-bar-inadequate" style={{ width: `${perfect + good + inadequate}%` }}></div>
      </div>
      <div className="value">
        <span className="perfect">{perfect}%</span>
        <span className="good">{good}%</span>
        <span className="inadequate">{inadequate}%</span>
      </div>
    </>
  )
}

export default GraphCardItem