import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './Head.css'

const Head = () => {
  return (
    <header>
      <div className="logo">Saige<span className='logo_part2'>QA</span></div>
      <div className="notifications">Images to review <span className='counter'>16</span></div>
      <div className="profile-tab">
        <div className="profile-tab_thumbnail"></div>
        <div className="profile-tab_name">John Dowson <IoIosArrowDown /></div>
      </div>
    </header>
  )
}

export default Head