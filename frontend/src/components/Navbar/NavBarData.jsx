import React from 'react'
import { PiSidebarSimple } from 'react-icons/pi';
import { IoClose } from "react-icons/io5";
import * as IoIcons from 'react-icons/io'

export const NavBarData = [
    {
        title: 'Dashboard',
        path: '/Home',
        icon: <IoIcons.IoMdPodium />,
        optionName: 'nav-text'
    },
    {
        title: 'Tasks',
        path: '/Tasks',
        icon: <IoIcons.IoIosList />,
        optionName: 'nav-text'
    },
    {
        title: 'Medications',
        path: '/Medications',
        icon: <IoIcons.IoIosMedkit />,
        optionName: 'nav-text'
    },
    {
        title: 'Family',
        path: '/Family',
        icon: <IoIcons.IoMdPeople />,
        optionName: 'nav-text'
    },
]