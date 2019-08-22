const express = require('express')
const router = express.Router()

// @route  Get    api/contacts
//@desc           get all user contacts
// @access        Private
router.get('/', (req, res) => {
    res.send('Get all contacts')
});

// @route  POST    api/contacts
//@desc           add new contact
// @access        Private
router.post('/', (req, res) => {
    res.send('Add contacts')
});

// @route  PUT    api/contacts/:id
//@desc           update contact
// @access        Private
router.put('/:id', (req, res) => {
    res.send('Update contact')
});

// @route  DELTE    api/contacts/:id
//@desc             Delete contact
// @access          Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact')
});

module.exports = router