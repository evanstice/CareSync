import React from 'react';
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import './Tasks.css';

export function OptionsMenu() {
    return (
        <div className='options-box'>
            <div className='options-menu'>
                <div className='edit-bar'>
                    <div className='edit-icon'><MdOutlineEdit /></div>
                    <button className='edit-button'>Edit</button>
                </div>
                <div className='delete-bar'>
                    <div className='delete-icon'><MdDeleteOutline /></div>
                    <button className='delete-button'>Delete</button>
                </div>
                
            </div>
        </div>
    );
}

export default OptionsMenu