import express from 'express';
import postBlog from "./postBlog"
import getOneBlogPost from "./getBlogPostById";

const router = express.Router();

router.use("/postblog", postBlog);
router.use("/getoneblogpost", getOneBlogPost);

export default router;