import React from 'react';
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import './Tasks.css';

export function OptionsMenu() {
    const items = [
        {name: 'Edit', icon: MdOutlineEdit},
        {name: 'Delete', icon: MdDeleteOutline},
    ];

    return (
        <div className='options-box'>
        </div>
    );
}

export default OptionsMenu