import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import './Home.css';

// Props passed into MedicineBlockItem component
export function MedicineBlockItem({ medicine, _id, taken, updateMedicine }) {
    const [isTaken, setIsTaken] = useState(taken);

    function handleCheckboxToggle(event) {
        const newTakenStatus = event.target.checked;
        setIsTaken(newTakenStatus);
        updateMedicine(_id, { ...medicine, taken: newTakenStatus });
    }

    return (
        <div className="single-task">
            <Checkbox
                sx={{
                    color: 'white',
                    '&.Mui-checked': {
                        color: 'white',
                    },
                }}
                size="small"
                checked={isTaken}
                onChange={handleCheckboxToggle}
            />
            <div className="task-title">{medicine.name}</div>
        </div>
    );
}
