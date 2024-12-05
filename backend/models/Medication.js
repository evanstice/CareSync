import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
    medication: {
        type: String,
        required: true
    },
    dose: {
        type: String,
    },
    frequency: {
        type: String,
    },
    familyMember: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false,
    },
    user_id: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

// Creates Medication(s) collection in MongoDB
const Medication = mongoose.model("Medication", medicationSchema);
export default Medication;