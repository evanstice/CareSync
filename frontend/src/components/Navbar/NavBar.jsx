import { Link } from 'react-router-dom';
import { PiSidebarSimple } from 'react-icons/pi';
import { IoClose } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { NavBarData } from './NavBarData';
import './NavBar.css'
import { IconContext } from 'react-icons';
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function NavBar () {
    const [tokens, setTokens] = useState([])
    const [sidebar, setSidebar] = useState(false)
    const handleLogout = () => {
        //deleteToken('674a2e4bcf35b5c534298989')
      };
    const showSidebar = () => setSidebar(!sidebar)

    useEffect(() => {
        console.log("VITE_API_URL:", import.meta.env.VITE_API_URL)
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/tokens`)
            .then((res) => {
                console.log('Fetched tokens:', res.data.data)
                setTokens(res.data.data)
            })
            .catch((error) => console.error('Error fetching tokens:', error.message))
    }, [])

    function deleteToken(id) {
        axios
            .delete(`${import.meta.env.VITE_API_URL}/api/tokens/${id}`)
            .then((res) => {
                setTokens(currTokens =>
                    currTokens.map(token => {
                        if (token._id === id) {
                            return {...token, ...updatedToken};
                        }
                        return user
                    })
                )
            })
            .catch((error) => { 
              console.error('Error deleting user:', error.message);
            })
      }

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