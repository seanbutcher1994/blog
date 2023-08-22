import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String || null,
        required: false,
        lowercase: false,
    }
})

export const Blog = mongoose.model("blog", blogSchema);