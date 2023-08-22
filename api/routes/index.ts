import express from "express";
import blogRoutes from "./blogRoutes"

const router = express.Router();

router.use('/blogs', blogRoutes)

export default router;
