import { Router } from "express";
import { getTest } from "../controllers/test.js";

const router = Router();

router.get("/",getTest)

export default router;