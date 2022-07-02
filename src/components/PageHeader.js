import React from 'react'
import './PageHeader.css'
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineFilter } from "react-icons/hi";


const PageHeader = () => {
  return (
    <div className='contained page-header mb-16'>
      <div className="title">
        Summary Statistics
      </div>
      <div className="filter-drop">
        NYC clinics practice <IoIosArrowDown />
      </div>
      <div className="filter-drop">
        1 Month <IoIosArrowDown />
      </div>
      <div className="filter-btn">
        <HiOutlineFilter /> NYC clinics practice
      </div>

    </div>
  )
}

export default PageHeader