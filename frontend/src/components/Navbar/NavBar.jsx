import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiSidebarSimple } from 'react-icons/pi';
import { IoClose } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { NavBarData } from './NavBarData';
import './NavBar.css'
import { IconContext } from 'react-icons';

function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    const handleLogout = () => {
        // Add your logout logic here (e.g., clearing user data or tokens)
        // log out of token needed
      };
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#f0ffff'}}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <PiSidebarSimple onClick={showSidebar}/>
                </Link>
                <Link to='/home' className='nav-title'>
                    CareSync
                </Link>
                <Link to='/login' className='log-out-button'>
                    <IoLogOutOutline onClick={handleLogout} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <div className='close-button'><IoClose /></div>
                        </Link>
                    </li>
                    {NavBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.optionName}>
                                <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default NavBar;