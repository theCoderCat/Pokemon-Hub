const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PokemonModel = require('./models/Pokemon');

// middleware
router.use( (req, res, next) => {
	next();
} );

router.post('/register', (req, res) => {
	console.log(req.body);
	let pokemon = new PokemonModel;
	pokemon = req.body;
	// validate
	if (true) {
		
		pokemon.save(() => {
			res.send('saved');
		});
	}
	
});

router.get('/:id', (req, res) => {
	console.log(req.params);
	res.send(req.params);
});

module.exports = router;
