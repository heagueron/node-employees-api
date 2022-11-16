import { Router } from "express";

import {
 home, companySalaries
} from "../controllers/home.controller.js";

const router = Router();

router.get("/", home)

router.get("/companySalaries", companySalaries)

export default router;