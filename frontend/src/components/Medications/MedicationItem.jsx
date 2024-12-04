import { Checkbox, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react'
import './Medications.css'
import OptionsMenu from './OptionsMenu';

// Props passed into MedicationItem component from MedicationsView.jsx
export function MedicationItem({ Medication, _id, completed, familyMember, needByDate, updateMedication, deleteMedication }) {
    const [isOpen, setIsOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [isEditing, setIsEditing] = useState(false);
    const [editedMedication, setEditedMedication] = useState(Medication);
    const [editedFamilyMember, setEditedFamilyMember] = useState(familyMember);
    const [editedNeedByDate, setEditedNeedByDate] = useState(needByDate);
    
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
            Medication: editedMedication,
            familyMember: editedFamilyMember,
            needByDate: editedNeedByDate,
            completed
        });
        setIsEditing(false);
    }

    function handleCheckboxToggle(event) {
        const newCompletedStatus = event.target.checked;
        updateMedication(_id, {
            Medication: editedMedication,
            familyMember: editedFamilyMember,
            needByDate: editedNeedByDate,
            completed: newCompletedStatus
        });
    }

    if (isEditing) {
        return (
            <div className='single-Medication'>
                <input
                    type='text'
                    className='Medication-title'
                    value={editedMedication}
                    onChange={(e) => setEditedMedication(e.target.value)}
                    style={{ color: '#333', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '4px' }}
                />
                <input
                    type='date'
                    className='need-by-date'
                    value={editedNeedByDate ? editedNeedByDate.split('T')[0] : ''}
                    onChange={(e) => setEditedNeedByDate(e.target.value)}
                    style={{ color: '#333', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '4px' }}
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
         <div className='single-Medication'>
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
            <div className='Medication-title'>{Medication}</div>
            <div className='need-by-date'>
                {needByDate ? new Date(needByDate).toLocaleDateString() : "N/A"}
            </div>
            <div className="family-member">{familyMember}</div>
            <div className="Medication-options-button" style={{ position: 'relative' }}>
                <IconButton onClick={toggleOptionsMenu}>
                    <MoreVertIcon fontSize='small' />
                </IconButton>
                {isOpen && (
                    <div style={{ position: 'absolute', right: 0, top: '100%' }}>
                        <OptionsMenu onEdit={handleEditClick} deleteMedication={() => deleteMedication(_id)} />
                    </div>
                )}
            </div>
        </div>
    );     
}