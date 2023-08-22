import express, { Request, Response } from "express";
import { Blog } from "../../models/blogPost";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const blogPost = new Blog({
            title: req.body.title,
            content: req.body.content
        });
        await blogPost.save();
        res.status(200).json({message: "Blog posted successfuly!", post: blogPost})
    } catch (error) {
        
    }
})

export default router;