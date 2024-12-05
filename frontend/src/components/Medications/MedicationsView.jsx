import { MedicationItem } from './MedicationItem'
import './Medications.css'

// Medications, updateMedication, and deleteMedication are taken as "props"
// --> passes list of Medications to the function and creates a MedicationItem for each one
export default function MedicationsView({ medications=[], updateMedication, deleteMedication }) {
    console.log('Medications array fetched from DB:', medications)
    return (
        <div className='Medication-list-view'>
            {medications.map(medication => {
                return (
                    <MedicationItem
                        {...medication} // spreads all properties of Medication objects
                        key={medication._id}
                        updateMedication={updateMedication}
                        deleteMedication={deleteMedication}
                    />
                )
            })}
        </div>
    )
}