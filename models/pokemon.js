const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const PokemonSchema = new Schema({
    species: Number,
    name: String,
    nicknamed: Boolean,
    nature: String,
    ability: String,
    ivHp: Number,
    ivAtk: Number,
    ivDef: Number,
    ivSAtk: Number,
    ivSDef: Number,
    ivSpd: Number,
    evHp: Number,
    evAtk: Number,
    evDef: Number,
    evSAtk: Number,
    evSDef: Number,
    evSpd: Number,
    heldItem: String,
    isEgg: Boolean,
    isShiny: Boolean,
    updated: { type: Date, default: Date.now }
});
const PokemonModel = mongoose.model('PokemonModel', PokemonSchema);
module.exports = PokemonModel;