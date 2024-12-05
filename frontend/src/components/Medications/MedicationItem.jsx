import { Checkbox, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react'
import './Medications.css'
import OptionsMenu from './OptionsMenu';

// Props passed into MedicationItem component from MedicationsView.jsx
export function MedicationItem({ medication, _id, dose, frequency, completed, familyMember, updateMedication, deleteMedication }) {
    const [isOpen, setIsOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [isEditing, setIsEditing] = useState(false);
    const [editedMedication, setEditedMedication] = useState(medication);
    const [editedDose, setEditedDose] = useState(dose);
    const [editedFrequency, setEditedFrequency] = useState(frequency)
    const [editedFamilyMember, setEditedFamilyMember] = useState(familyMember);
    
    function toggleOptionsMenu() {
        setIsOpen(!isOpen);
    }

    function handleEditClick() {
        setIsEditing(true);
        setIsOpen(false);
    }

    function handleCancelClick() {
        setIsEditing(false);
    }

    function handleSaveClick() {
        updateMedication(_id, {
            medication: editedMedication,
            dose: editedDose,
            frequency: editedFrequency,
            familyMember: editedFamilyMember,
            completed
        });
        setIsEditing(false);
    }

    function handleCheckboxToggle(event) {
        const newCompletedStatus = event.target.checked;
        updateMedication(_id, {
            medication: editedMedication,
            dose: editedDose,
            frequency: editedFrequency,
            familyMember: editedFamilyMember,
            completed: newCompletedStatus
        });
    }

    function handleDelete() {
        console.log("reached")
        if (window.confirm(`Are you sure you want to remove ${medication} from the care plan?`)) {
            deleteMedication(_id);
        }
    }

    if (isEditing) {
        return (
            <div className='single-medication'>
                <input
                    type='text'
                    className='medication-title'
                    value={editedMedication}
                    onChange={(e) => setEditedMedication(e.target.value)}
                    style={{ color: '#333', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '4px' }}
                />
                <input
                    type='text'
                    value={editedDose}
                    onChange={(e) => setEditedDose(e.target.value)}
                    style={{ color: '#333', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '4px' }}
                    placeholder="i.e. 100mg"
                /> 
                <input
                    type='text'
                    value={editedFrequency}
                    onChange={(e) => setEditedFrequency(e.target.value)}
                    style={{ color: '#333', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '4px' }}
                    placeholder="i.e. 2 times/day"
                /> 
                <input
                    type='text'
                    className='family-member'
                    value={editedFamilyMember}
                    onChange={(e) => setEditedFamilyMember(e.target.value)}
                    style={{ color: '#333', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '4px' }}
                />
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
            </div>
        );
    }

    // If not editing, display the Medication like normal
    return (
         <div className='single-medication'>
            <Checkbox
                sx={{
                    color: 'white',
                    '&.Mui-checked': {
                        color: 'white',
                    },
                }}
                size="small"
                checked={completed}
                onChange={handleCheckboxToggle}
            />
            <div className='medication-title'>{medication}</div>
            <div className='need-by-date'>{dose}</div>
            <div className='need-by-date'>{frequency}</div>
            <div className="family-member">{familyMember}</div>
            <div className="medication-options-button" style={{ position: 'relative' }}>
                <IconButton onClick={toggleOptionsMenu}>
                    <MoreVertIcon fontSize='small' />
                </IconButton>
                {isOpen && (
                    <div style={{ position: 'absolute', right: 0, top: '100%' }}>
                        <OptionsMenu onEdit={handleEditClick} onDelete={handleDelete} />
                    </div>
                )}
            </div>
        </div>
    );     
}