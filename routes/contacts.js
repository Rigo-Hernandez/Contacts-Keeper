const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Contact = require('../models/Contact');

// @route  Get    api/contacts
//@desc           get all user contacts
// @access        Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST    api/contacts
//@desc           add new contact
// @access        Private
router.post('/', (req, res) => {
  res.send('Add contacts');
});

// @route  PUT    api/contacts/:id
//@desc           update contact
// @access        Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route  DELTE    api/contacts/:id
//@desc             Delete contact
// @access          Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
