const mongoose = require("mongoose");


const BlogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    date: {
        type: String,
        default: new Date().toLocaleDateString()
    }


}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Blog", BlogSchema);