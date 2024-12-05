import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import './Medications.css';

// Pass onEdit and onDelete props to the OptionsMenu to handle when they're clicked
export function OptionsMenu({ onEdit, deleteMedication }) {
    return (
        <div className='options-box'>
            <div className='options-menu'>
                <div className='edit-bar' onClick={onEdit}>
                    <MdOutlineEdit className='edit-icon' />
                    <button className='edit-button'>Edit</button>
                </div>
                <div className='delete-bar' onClick={deleteMedication}>
                    <MdDeleteOutline className='delete-icon' />
                    <button className='delete-button'>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default OptionsMenu;