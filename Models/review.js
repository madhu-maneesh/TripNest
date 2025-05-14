const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema=new Schema({
    comment:String,
    emoji: {
        type: String,
        enum: ["😍", "😊", "😐", "😕", "😠"], // restrict to valid emojis
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model("review",reviewSchema);