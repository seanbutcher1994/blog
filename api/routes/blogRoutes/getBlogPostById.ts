import express, {Request, Response} from 'express'
import { Blog } from '../../models/blogPost';

const router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const blogPost = await Blog.findOne({_id: id})
        res.status(200).json({post: blogPost})
    } catch (error) {
        
    }
})

export default router;
