import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiSidebarSimple } from 'react-icons/pi';
import { IoClose } from "react-icons/io5";
import { NavBarData } from './NavBarData';
import './NavBar.css'
import { IconContext } from 'react-icons';

function NavBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#f0ffff'}}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <PiSidebarSimple onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <IoClose />
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