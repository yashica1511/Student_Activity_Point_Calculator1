const mongoose = require('mongoose');

const coordinatorAssignmentSchema = new mongoose.Schema({
    staffId: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff', required: true }, 
    dept: { type: String, required: true }, 
    year: { type: Number, required: true },  
    semester: { type: Number, required: true },  
    section: { type: String, required: true }, 
    allocatedOn: { type: Date, default: Date.now } 
});

const CoordinatorAssignment = mongoose.model('CoordinatorAssignment', coordinatorAssignmentSchema);

module.exports = CoordinatorAssignment;
