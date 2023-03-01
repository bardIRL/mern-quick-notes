const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["🔴 Urgent", "🔵 Important", "🟢 Normal"],
        required: true
    },
    category: {
        type: String,
        enum: ["Home", "Work", "School", "Wellness", "Social", "Family", "Hobby", "Misc."],
        required: true
    },
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true 
    }
}, {
    timestamps: true
})

module.exports = noteSchema;