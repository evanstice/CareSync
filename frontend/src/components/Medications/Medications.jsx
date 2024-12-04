import { useState } from "react";
import { MdTask } from "react-icons/md";
import './medications.css'
import medicationsView from './medicationsView'
import axios from 'axios'
import Optionsmenu from './Optionsmenu'

export default function medications( { medications, createmedication, updatemedication, deletemedication }) {
    const [newmedication, setNewmedication] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        if (newmedication === "") return;
    
        const token = localStorage.getItem('token');
        createmedication({ medication: newmedication }, token);
        setNewmedication("");
    }
    
    
    return (
        <div className='background'>
            <div className='title'>
                <div className='title-icon'>
                    <medication />
                </div>
                <div className='title-text'>
                    <MdTask />
                </div>
            </div>
            <form onSubmit={handleSubmit} className='input-bar'>
                <div className='input-bar-type'>
                    <input
                        placeholder='Enter a medication...'
                        value={newmedication}
                        onChange={(event) => setNewmedication(event.target.value)}
                    />
                </div>
                <div className='input-bar-button'>
                    <button type='submit'>
                        Add
                    </button>
                </div>
            </form>
            <div className='medication-view-labels'>
                <div className='medication-title-label'>
                    <div className='checkmark'>
                    ✓
                    </div>
                medication
                </div>
                <div className='medication-date-label'>
                    Complete By
                </div>
                <div className='medication-member-label'>
                    Assigned To
                </div>
                <div className='spacer'>
                    
                </div>
            </div>
            <div className='medications-view-wrapper'>
                <medicationsView
                    medications={medications}
                    updatemedication={updatemedication}
                    deletemedication={deletemedication}
                />
            </div>
        </div>
    )
}