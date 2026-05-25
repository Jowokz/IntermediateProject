import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import {
  getProjects,
  createProject,
  getTasksByProject,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/projectController.js';

const router = express.Router();

router.use(requireAuth);

router.get('/', getProjects);
router.post('/', createProject);
router.get('/:projectId/tasks', getTasksByProject);
router.post('/:projectId/tasks', createTask);
router.put('/:projectId/tasks/:taskId', updateTask);
router.delete('/:projectId/tasks/:taskId', deleteTask);

export default router;
