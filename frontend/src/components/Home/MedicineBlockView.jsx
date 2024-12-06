import React from "react";
import { MedicineBlockItem } from "./MedicineBlockItem";
import "./Home.css";

export default function MedicineBlockView({ medications = [], updateMedicine }) {
    console.log("medications array fetched from DB:", medicines);
    return (
        <div className="medicine-block-view">
            {medications.map((medicine) => (
                <MedicineBlockItem
                    {...medications} // spreads all properties of medicine objects
                    key={medications._id}
                    updateMedicine={updateMedicine}
                />
            ))}
        </div>
    );
}
