import { useState } from "react";
import { CgPill } from "react-icons/cg";
import './medications.css'
import MedicationsView from './MedicationsView'
import axios from 'axios'
import OptionsMenu from './OptionsMenu'

export default function medications( { medications, createMedication, updateMedication, deleteMedication }) {
    const [newMedication, setNewMedication] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        if (newMedication === "") return;
    
        const token = localStorage.getItem('token');
        createMedication({ medication: newMedication }, token);
        setNewMedication("");
    }
    
    
    return (
        <div className='background'>
            <div className='title'>
            <div className='title-icon'>
                    <CgPill />
                </div>
                <div className='title-text'>
                    Medications
                </div>
            </div>
            <form onSubmit={handleSubmit} className='input-bar'>
                <div className='input-bar-type'>
                    <input
                        placeholder='Enter a medication...'
                        value={newMedication}
                        onChange={(event) => setNewMedication(event.target.value)}
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
                Medication
                </div>
                <div className='medication-date-label'>
                    Dose
                </div>
                <div className='medication-member-label'>
                    Assigned To
                </div>
                <div className='spacer'>
                    
                </div>
            </div>
            <div className='medications-view-wrapper'>
                <MedicationsView
                    medications={medications}
                    updatemedication={updateMedication}
                    deletemedication={deleteMedication}
                />
            </div>
        </div>
    )
}