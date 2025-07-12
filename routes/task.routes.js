const router = require('express').Router();
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require('../controllers/task.controller');
const { protect } = require('../middlewares/auth.middleware');

router.post('/tasks', protect, createTask);
router.get('/tasks', protect, getTasks);
router.patch('/tasks/:id', protect, updateTask);
router.delete('/tasks/:id', protect, deleteTask);

module.exports = router;
