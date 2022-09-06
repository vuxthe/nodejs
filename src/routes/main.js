import express from 'express';
import { getTask, getTasks, createTask, delTask, updateTask } from '../controllers/TaskController.js';
const router = express.Router();
router.get('/task', getTasks);
router.post('/task', createTask);
router.get('/task/:id', getTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', delTask);

export default router;
