const Task = require('../models/task.model');

const createTask = async (req, res) => {
  const task = await Task.create({ user: req.user._id, name: req.body.name });
  res.status(201).json(task);
};

const getTasks = async (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query;
  const query = { user: req.user._id, name: { $regex: search, $options: 'i' } };

  const tasks = await Task.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(tasks);
};

const updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    { status: req.body.status },
    { new: true }
  );
  res.json(task);
};

const deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  res.status(204).send();
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};
