import express from "express"
import {getAllEmployees, getEmployee, updateEmployee, createEmployee, deleteEmployee} from "../controllers/employees.js"
const router = express.Router()

router.route('/api/employees')
    .get(getAllEmployees)
    .post(createEmployee)
router.route('/api/employees/:id')
    .get(getEmployee)
    .delete(deleteEmployee)
    .patch(updateEmployee)

export default router