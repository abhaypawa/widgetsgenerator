import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";


const Navbar = ({ searchQuery, setSearchQuery }) => { // Accept props
  return (
    <div className='navbar-container'>
        <div className='navbar-home'>
            <span className='text-gray'>Home</span>
            <IoIosArrowForward />
            <span className='font-bold'><a href="/">DashboardV2</a></span>
        </div>
        <div className='navbar-search'>
            <div className='search-container'>
                <CiSearch className='search-icon'/>
                <input 
                  type="text" 
                  className='search-input' 
                  placeholder='Search Anything..' 
                  value={searchQuery} // Bind input to searchQuery
                  onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on change
                />
            </div>
            <div className='navbar-icons'>
                <IoIosArrowDown className='icon'/>
                <MdOutlineNotificationsActive className='notification-icon'/>
                <IoPersonCircleSharp className='person-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
