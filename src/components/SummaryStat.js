import React from 'react'
import './SummaryStat.css'
import { IoMdInformation } from 'react-icons/io'
import { TbChevronUp, TbChevronDown } from 'react-icons/tb'
import GraphCardItem from './GraphCardItem'

const SummaryStat = () => {
  return (
    <div className='contained mb-16'>
      <div className="summary-stat comp-body">
        <div className="num-card">
          <div className="num-card_title">Perfect Images <span className='icon'><IoMdInformation /></span></div>
          <div className="num-card_values">
            <div className="num-card_values__main">15%</div>
            <div className="num-card_values__change positive">+2% <TbChevronUp /></div>
            <div className="num-card_values__btn">View</div>
          </div>
        </div>
        <div className="num-card">
          <div className="num-card_title">Good Images <span className='icon'><IoMdInformation /></span></div>
          <div className="num-card_values">
            <div className="num-card_values__main">65%</div>
            <div className="num-card_values__change negative">-5% <TbChevronDown /></div>
            <div className="num-card_values__btn">View</div>
          </div>
        </div>
        <div className="num-card">
          <div className="num-card_title">Inadequate Images <span className='icon'><IoMdInformation /></span></div>
          <div className="num-card_values">
            <div className="num-card_values__main">20%</div>
            <div className="num-card_values__change positive">-5% <TbChevronUp /></div>
            <div className="num-card_values__btn">View</div>
          </div>
        </div>
        <div className="graph-card">
          <div className="graph-card_header">
            <div className="graph-card_header_filter">Least performing sites <TbChevronDown />
              <div className="graph-card_header_link">See all</div>
            </div>
          </div>
          <div className="graph-card_header-legend">Image quality frequency</div>
          <div></div>
          <GraphCardItem metric={'UCSF Medical Center'} perfect={12} good={25} inadequate={63} />
          <GraphCardItem metric={'Massachusetts General Hospital'} perfect={9} good={37} inadequate={54} />
          <GraphCardItem metric={'John Hopkins Hospital'} perfect={18} good={35} inadequate={47} />
        </div>
      </div>
    </div>
  )
}

export default SummaryStat