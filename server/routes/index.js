const express = require('express');
const Volunteer = require('../model/Volunteer');

const router = express.Router();

// Post a new Volunteer
router.post('/', (req, res) => {
    const v = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        location: {
            type: 'Point',
            coordinates: [req.body.long, req.body.lat]
        }
    };

    const volunteer = new Volunteer(v);
    volunteer
        .save()
        .then(() => {
            res.send('Volunteer added successfully');
        })
        .catch(err => {
            res.status(404).send(`Unable to add to databas: ${err}`);
        });
});

// Get closest Volunteer
router.get('/', (req, res) => {
    Volunteer.find({
        location: {
            $nearSphere: {
                $geometry: {
                    type: 'Point',
                    coordinates: [req.query.long, req.query.lat]
                }
            }
        }
    })
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.status(404).send(`Unable to search database: ${err}`);
        });
});

module.exports = router;
