import React from 'react';
import { FiPlus } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaClock } from "react-icons/fa6";
import { PiLineVertical } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-title'>
            <h1>CNAPP Dashboard</h1>
        </div>
        <div className='hero-buttons'>
            <button className='hero-button hero-button-add'>
                Add Widget <FiPlus className='icon-small'style={{ marginLeft: '8px' }}/>
            </button>
            <button className='hero-button hero-button-refresh'>
                <HiOutlineRefresh />
            </button>
            <button className='hero-button hero-button-dots'>
                <HiOutlineDotsVertical />
            </button>
            <button className='hero-button hero-button-time'>
                <FaClock className='icon-medium'/> 
                <PiLineVertical className='icon-vertical-flip'/> 
                <span>Last 2 days</span> 
                <IoIosArrowDown />
            </button>
        </div>
    </div>
  )
}

export default Hero;
