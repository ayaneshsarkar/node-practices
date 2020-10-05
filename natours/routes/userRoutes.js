const express = require('express');

// Get Users
const getUsers = (req, res) => {
  res.status(500).json({ status: 'error', message: 'This route is not yet defined!' });
}

// Get Single User
const getUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'This route is not yet defined!' });
}

// Create User
const createUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'This route is not yet defined!' });
}

// Update User
const updateUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'This route is not yet defined!' });
}

// Delete User
const deleteUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'This route is not yet defined!' });
}

const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

// Exporting Module
module.exports = router;