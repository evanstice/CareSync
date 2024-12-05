import Medications from '../components/Medications/Medications.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'
import NavBar from '../components/Navbar/NavBar';

export default function MedicationsPage() {
    console.log('MedicationsPage component mounted');

    const [medications, setMedications] = useState([])

    // GET (getMedications): load meds from the backend
    useEffect(() => {
        console.log("VITE_API_URL:", import.meta.env.VITE_API_URL)
        const token = localStorage.getItem('token');
        getMedications(token)
    }, [])
    
    function getMedications(token) {
        axios
        .get(`${import.meta.env.VITE_API_URL}/api/medications`, {
            headers: {
                Authorization: `Bearer ${token}` // Make sure 'Bearer' is included
            }
        })
        .then((res) => {
            console.log('Fetched Medications:', res.data.data)
            setMedications(res.data.data)
        })
        .catch((error) => console.error('Error fetching Medications:', error.message))
    }

    // POST (createMedication)
    function createMedication(newMedication, token) {
        axios
            .post(`${import.meta.env.VITE_API_URL}/api/medications`, newMedication, {
                headers: {
                    Authorization: `Bearer ${token}` // Include 'Bearer' token for authorization
                }
            })
            .then((res) => {
                console.log('Created Medication:', res.data.data);
                setMedications((currMedications) => [...currMedications, res.data.data]);
            })
            .catch((error) => console.error('Error creating Medication:', error.message));
    }
    

    // Send PUT request to backend API to update a specific Medication -- .then() handles response from the server
    function updateMedication(id, updatedData) {
        axios
            .put(`${import.meta.env.VITE_API_URL}/api/medications/${id}`, updatedData)
            .then((res) => {
                setMedications(currMedications =>
                    currMedications.map(medication => {
                        if (medication._id === id) {
                            return {...medication, ...updatedData};
                        }
                        return medication
                    })
                )
            })
            .catch((error) => console.error('Error updating Medication:', error.message))
    }

    // DELETE (deleteMedication)
    function deleteMedication(id) {
        axios
            .delete(`${import.meta.env.VITE_API_URL}/api/medications/${id}`)
            .then(() => {
                setMedications(currMedications => {
                    return currMedications.filter(medication => medication._id !== id)
                })
                console.log('Deleted medication with ID: ${id}')

            })
            .catch((error) => console.error('Error deleting Medication:', error.message))
    }


    return (
    <>
        {console.log('Props being passed to Medications:', {
            medications,
            createMedication,
            updateMedication,
            deleteMedication,
        })}
        
        <Medications
            medications={medications}
            createMedication={createMedication}
            updateMedication={updateMedication}
            deleteMedication={deleteMedication}
        />
        <div className='navbar-wrapper'>
        <NavBar />
      </div>
    </>
    )
}