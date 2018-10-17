const express= require('express');
const router = express.Router();
const controller = require('../controller/employee.controller');

router.get('/',controller.getAllEmployees);
router.post('/',controller.insertEmployee)
router.get('/:id',controller.getEmployee)
router.put('/',controller.updateEmployee)
router.delete('/',controller.deleteEmployee)

module.exports = router;