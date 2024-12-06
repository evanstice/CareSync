import React from "react";
import { MedicineBlockItem } from "./MedicineBlockItem";
import "./Home.css";

export default function MedicineBlockView({ medicines = [], updateMedicine }) {
    console.log("Medicines array fetched from DB:", medicines);
    return (
        <div className="medicine-block-view">
            {medicines.map((medicine) => (
                <MedicineBlockItem
                    {...medicine} // spreads all properties of medicine objects
                    key={medicine._id}
                    updateMedicine={updateMedicine}
                />
            ))}
        </div>
    );
}
