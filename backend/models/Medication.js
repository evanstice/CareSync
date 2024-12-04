import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
    medName: {
        type: String,
        required: true
    },
    dose: {
        type: String,
        required: true
    },
    familyMember: {
        type: String
    },
    needByDate: {
        type: Date
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