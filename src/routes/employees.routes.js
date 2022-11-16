import { Router } from "express";

import {
  getEmployees,
  getEmployee,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from "../controllers/employees.controller.js";

const router = Router();

//ENDPOINTS
router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployees);

router.put("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployees);

export default router;
