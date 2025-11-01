const router = require('express').Router();
let Contact = require('../models/Contact.js');

router.route('/').post((req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;

    const newContact = new Contact({
        firstName,
        lastName,
        email,
        subject,
        message,
    });

    // Save to the database
    newContact.save()
        .then(() => res.json({ message: 'Contact information saved successfully!' }))
        .catch(err => res.status(400).json({ error: 'Error: ' + err }));
});

module.exports = router;