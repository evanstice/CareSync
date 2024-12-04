import Medications from '../components/Medications/Medications.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'
import NavBar from '../components/Navbar/NavBar';

export default function MedicationsPage() {
    const [medications, setMedications] = useState([])

    // GET (getMedications): load meds from the backend
    useEffect(() => {
        console.log("VITE_API_URL:", import.meta.env.VITE_API_URL)
        const token = localStorage.getItem('token');
        getMedications(token)
    }, [])
    
    function getMedications(token) {
        axios
        .get(`${import.meta.env.VITE_API_URL}/api/Medications`, {
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
        console.log("token:", token)
        axios
            .post(`${import.meta.env.VITE_API_URL}/api/Medications`, newMedication, {
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
            .put(`${import.meta.env.VITE_API_URL}/api/Medications/${id}`, updatedData)
            .then((res) => {
                setMedications(currMedications =>
                    currMedications.map(Medication => {
                        if (Medication._id === id) {
                            return {...Medication, ...updatedData};
                        }
                        return Medication
                    })
                )
            })
            .catch((error) => console.error('Error updating Medication:', error.message))
    }

    // DELETE (deleteMedication)
    function deleteMedication(id) {
        axios
            .delete(`${import.meta.env.VITE_API_URL}/api/Medications/${id}`)
            .then(() => {
                setMedications(currMedications => {
                    return currMedications.filter(Medication => Medication._id !== id)
                })
            })
            .catch((error) => console.error('Error deleting Medication:', error.message))
    }

    return (
    <>
        <Medications
            Medications={Medications}
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