const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;	
const PokemonModel = require('./models/Pokemon');

// middleware
router.use( (req, res, next) => {
	next();
} );

router.post('/register', (req, res) => {
	let data = req.body;
	let pokemon = new PokemonModel;
	// validate
	if (true) {
		for (key in req.body) {
			pokemon[key] = data[key];
		}

		pokemon.save().then(() => {
			res.send('pokemon saved');
		});
	}
	
});

router.get('/species/:dexEntry', (req, res) => {
	let id = req.params.dexEntry;
	PokemonModel.find()
		.where('species').equals(id)
		.exec()
		.then((list) => {
			res.json(list);
		});
});

router.get('/id/:id', (req, res) => {
	let id = req.params.id;
	PokemonModel.findById(id)
		.exec()
		.then((obj) => {
			res.json(obj);
		});
});

router.get('/all', (req, res) => {
	PokemonModel.find()
		.exec()
		.then((list) => {
			res.json(list);
		});
});

module.exports = router;
