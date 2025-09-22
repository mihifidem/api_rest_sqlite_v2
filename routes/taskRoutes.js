const express = require('express');
const router = express.Router();
const c = require('../controllers/taskController');


router.get("/",c.getTasks);
router.post("/",c.createTask);

module.exports = router;