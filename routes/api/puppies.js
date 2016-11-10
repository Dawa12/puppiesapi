const express = require('express');
const router = express.Router();
const { getAllPuppies, adoptPuppy, abandonPuppy, likePuppy } = require('../../models/puppy');
const methodOverride = require('method-override')

router.use(methodOverride('_method'))

// handle all the routes

// Implement PUT to like a puppy
router.put('/:id', likePuppy, (req, res) => {
  res.json(res.likes || []);
});

// Implement DELETE to abandon a puppy :(

router.delete('/:id', abandonPuppy, (req, res) => {
  res.status(200).end();
});

// get all puppies
router.get('/', getAllPuppies, (req, res) => {
  res.json(res.puppies || []);
});

// Implement POST to adopt a puppy
router.post('/', adoptPuppy, (req, res) => {
  res.json(res.puppies || []);
});


module.exports = router;
